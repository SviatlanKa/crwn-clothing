import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
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
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        value={email}
                        onHandleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={password}
                        onHandleChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                </form>

            </div>
        )
    }
}

export default SignIn;