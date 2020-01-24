import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './SignUp.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password and confirm passport don't match");
            return;
        };

        signUpStart({ email, password, displayName });
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onHandleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onHandleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onHandleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onHandleChange={this.handleChange}
                        label="confirmPassword"
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: newUser => dispatch(signUpStart(newUser))
})

export default connect(null, mapDispatchToProps)(SignUp);