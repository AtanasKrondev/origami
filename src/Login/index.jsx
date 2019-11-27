import React, { Component } from 'react';
import styles from './styles.module.css';

import withForm from '../shared/hocs/withForm'
import userService from '../services/user-service'


class Login extends Component {
    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {
        const errors = this.props.getErrorsState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        userService.login(data)
            .then(() => {
                this.props.history.push('/');
                this.setState()
            });
    }

    render() {
        return (
            <div className={styles["Login"]} >
                <form>
                    <div className={styles["form-control"]}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" onChange={this.usernameOnChangeHandler} />
                    </div>
                    <div className={styles["form-control"]}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={this.passwordOnChangeHandler} />
                    </div>
                    <div className={styles["form-control"]}
                    ><button type="button" onClick={this.submitHandler}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withForm(Login, { username: '', password: '' })