import React, { Component } from 'react';
import * as yup from 'yup';
import styles from './styles.module.css';
import withForm from '../shared/hocs/withForm';
import userService from '../services/user-service'

class Register extends Component {

    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    repasswordOnChangeHandler = this.props.controlChangeHandlerFactory('repassword');

    submitHandler = () => {
        // this.props.runValidations()
        //     .then(formData => console.log(formData))
        const errors = this.props.getErrorsState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        userService.register(data)
            .then(() => {
                this.props.history.push('/login');
            });
    };

    getFirstControlError = name => {
        const errorState = this.props.getErrorsState();
        return errorState && errorState[name] && errorState[name][0];
    }

    render() {
        const usernameError = this.getFirstControlError('username');
        const passwordError = this.getFirstControlError('password');
        const repasswordError = this.getFirstControlError('repassword');
        return (
            <div className={styles["Register"]} >
                <form>
                    <div className={styles["form-control"]}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" onChange={this.usernameOnChangeHandler} />
                        {usernameError && <p className={styles["error"]}>{usernameError}</p>}
                    </div>
                    <div className={styles["form-control"]}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={this.passwordOnChangeHandler} />
                        {passwordError && <p className={styles["error"]}>{passwordError}</p>}
                    </div>
                    <div className={styles["form-control"]}>
                        <label htmlFor="repassword">Re-password</label>
                        <input type="password" id="repassword" name="repassword"
                            onChange={this.repasswordOnChangeHandler} />
                        {repasswordError && <p className={styles["error"]}>{repasswordError}</p>}
                    </div>
                    <div className={styles["form-control"]}
                    ><button type="button" onClick={this.submitHandler}>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

const initialFormState = {
    username: '',
    password: '',
    repassword: '',
}

const schema = yup.object({
    username: yup.string('Username must be a string')
        .required('Username is required')
        .min(3, ' Username must be at least 3 characters'),
    password: yup.string('Password must be a string')
        .required('Password is required')
        .min(6, ' Password must be at least 6 characters'),
    repassword: yup.string('Password must be a string')
        .required('Password is required')
        .min(6, ' Password must be at least 6 characters')
    // .oneOf([yup.ref('password'), null], 'Passwords don\'t match'),
})

export default withForm(Register, initialFormState, schema);