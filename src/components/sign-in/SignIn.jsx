import React, { Component } from 'react';
import './SignIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState( { [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState( { email: '', password: ''});
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={}>
                    <label>Email</label>
                    <input name="email" type="email" value={email} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input name="password" type="password" value={password} onChange={this.handleChange} required />
                    <input type="submit" value="Submit Form"/>
                </form>

            </div>
        )
    }
}

export default SignIn;