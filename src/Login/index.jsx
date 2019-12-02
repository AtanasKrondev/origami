import React, { useCallback, useState } from 'react';
import * as yup from 'yup'
import styles from './styles.module.css';

import withForm, { useFormControl, getValidationsRunnerForSchema } from '../shared/hocs/withForm';

const validations = {
    username: yup.string('Username must be a string')
        .required('Username is required')
        .min(3, ' Username must be at least 3 characters'),
    password: yup.string('Password must be a string')
        .required('Password is required')
        .min(6, ' Password must be at least 6 characters'),
}

const schema = yup.object().shape(validations)

const validationsRunner = getValidationsRunnerForSchema(schema);

const Login = ({ login, history }) => {
    const usernameFormControl = useFormControl('', validations.username);
    const passwordFormControl = useFormControl('', validations.password);
    const [serverError, setServerError] = useState(null)
    const submitHandler = useCallback(() => {
        validationsRunner({
            username: usernameFormControl.value,
            password: passwordFormControl.value,
        })
            .then((data) => {
                login(history, data)
                    .catch(error => {
                        if (typeof error === 'object') { throw error; }
                        setServerError(error)
                    })
            })
            .catch(errors => {
                if (errors.username) { usernameFormControl.setErrors(errors.username); };
                if (errors.password) { passwordFormControl.setErrors(errors.password); };
            })
    }, [usernameFormControl, passwordFormControl, setServerError, history, login]);

    return (
        <div className={styles["Login"]} >
            <form>
                <div className={styles["form-control"]}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={usernameFormControl.changeHandler} />
                    {usernameFormControl.errors && <p className={styles["error"]}>{usernameFormControl.errors[0]}</p>}
                </div>
                <div className={styles["form-control"]}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={passwordFormControl.changeHandler} />
                    {passwordFormControl.errors && <p className={styles["error"]}>{passwordFormControl.errors[0]}</p>}
                    {serverError && <p className={styles["error"]}>{serverError}</p>}
                </div>
                <div className={styles["form-control"]}
                ><button type="button" onClick={submitHandler}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default withForm(Login, { username: '', password: '' })