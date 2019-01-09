import React from 'react';

class LoginForm extends React.Component {
    state = {
        name: '',
        password: '',
        passwordAgain: '',
        error: '',
        login: false
    };
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() =>({
            name
        }));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() =>({
            password
        }));
    };
    onPasswordAgainChange = (e) => {
        const passwordAgain = e.target.value;
        this.setState(() =>({
            passwordAgain
        }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.trim().length < 3 || this.state.password.trim().length < 6 ) {
            this.setState(() => ({
                error: 'Your name must contain at least 3 characters and password must contain at least 6 characters.',
                login: false
            }));
        } else if (this.state.name.trim().length > 10) {
            this.setState(() => ({
                error: 'Your name can contain only up to 10 characters.',
                login: false
            }))
        } else if (this.state.password !== this.state.passwordAgain) {
            this.setState(() => ({
                error: 'Passwords do not match!',
                login: false
            }))
        } else {
            this.setState(() =>({
                login: true,
                error: ''
            }));
        };
    };
    render () {
        return (
            <div className="form-wrapper">
                <div className="not-logged-in">
                    <form className="not-logged-in__group form" onSubmit={this.onSubmit}>
                        <div className="form__group">
                            <label htmlFor="name">Name</label>
                            <input className="form__input" id="name" onChange={this.onNameChange} placeholder="Your name" type="text" value={this.state.name} required/>
                        </div>
                        <div className="form__group u-margin-bottom-large">
                            <label htmlFor="password">Password</label>
                            <input className="form__input" id="password" onChange={this.onPasswordChange} placeholder="Password" type="password" value={this.state.password} required/>
                        </div>
                        <div className="form__group u-margin-bottom-large">
                            <label htmlFor="repeat_password">Repeat Password</label>
                            <input  className="form__input" id="repeat_password" onChange={this.onPasswordAgainChange} placeholder="Repeat Password" type="password" value={this.state.passwordAgain} required/>
                        </div>
                        <input className="btn btn--white" type="submit" value="Sign Up" />
                    </form>
                    { this.state.login ? <p className="success">Successfully signed up!</p> : null}
                    { this.state.error ? <p className="error">{ this.state.error }</p> : null}
                </div>
            </div>
        );
    };
};

export default LoginForm;