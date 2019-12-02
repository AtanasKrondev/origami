import React, { Component, useState, useCallback, useMemo } from 'react';

const runControlValidation = (value, validations) => {
    return validations.validate(value, { abortEarly: false });
};

export const getValidationsRunnerForSchema = schema => form => {
    if (!schema) { return Promise.resolve() };
    return schema.validate(form, { abortEarly: false })
        .then(() => form)
        .catch(err => {
            const errors = err.inner.reduce((acc, { path, message }) => {
                acc[path] = (acc[path] || []).concat(message);
                return acc;
            }, {})
            return Promise.reject(errors);
        });
}

const getControlChangeHandler = (validations, setValue, setErrors) => {
    let id;
    return e => {
        const newValue = e.target.value;
        if (id) {
            clearTimeout(id); id = null;
        }
        id = setTimeout(() => {
            setValue(newValue)
            runControlValidation(newValue, validations)
                .then(() => {
                    setErrors(undefined);
                })
                .catch(err => {
                    setErrors(err.errors)
                });
            id = null;
        }, 300);
    }
}

export const useFormControl = (defaultValue, validations) => {

    const [value, setValue] = useState(defaultValue);
    const [errors, setErrors] = useState(undefined);

    const changeHandler = useCallback(
        getControlChangeHandler(validations, setValue, setErrors),
        [validations, setValue, setErrors]
    );

    return useMemo(() => ({
        value, setValue, errors, setErrors, changeHandler
    }), [value, setValue, errors, setErrors, changeHandler]);
}

export default function withForm(Cmp, initialState, schema) {
    return class extends Component {
        state = {
            form: initialState,
            errors: undefined
        };

        controlChangeHandlerFactory = name => {
            let id;
            return e => {
                const newValue = e.target.value;
                if (id) {
                    clearTimeout(id); id = null;
                }
                id = setTimeout(() => {
                    this.setState(({ form }) => {
                        return { form: { ...form, [name]: newValue } };
                    });

                    this.runControlValidation(name)
                        .then(() => {
                            this.setState(({ errors: { [name]: current, ...others } = {} }) =>
                                ({ errors: Object.keys(others).length === 0 ? undefined : others })
                            );
                        })
                        .catch(err => {
                            this.setState(({ errors }) => ({ errors: { ...errors, [name]: err.errors } }));
                        });

                    id = null;
                }, 300);
            }
        };

        getFormState = () => {
            return this.state.form;
        };

        getErrorsState = () => {
            return this.state.errors;
        };

        runControlValidation = name => {
            const currentValue = this.state.form[name];
            // eslint-disable-next-line no-mixed-operators
            return schema && schema.fields[name].validate(currentValue, { abortEarly: false }) || Promise.resolve();
        }

        runValidations = () => {
            if (!schema) { return Promise.resolve() };
            return schema.validate(this.state.form, { abortEarly: false })
                .then(() => {
                    this.setState({ errors: undefined })
                    return this.state.form
                })
                .catch(err => {
                    const errors = err.inner.reduce((acc, { path, message }) => {
                        acc[path] = (acc[path] || []).concat(message);
                        return acc;
                    }, {})
                    this.setState({ errors });
                });
        };

        render() {
            return <Cmp {...this.props}
                controlChangeHandlerFactory={this.controlChangeHandlerFactory}
                getFormState={this.getFormState}
                getErrorsState={this.getErrorsState}
                runValidations={this.runValidations}
            ></Cmp>
        };
    }
}