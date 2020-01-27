import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './SignUp.scss';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredential] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password and confirm passport don't match");
            return;
        };

        signUpStart({ email, password, displayName });
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredential({ ...userCredentials, [name]: value });
    };

    return(
        <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onHandleChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onHandleChange={handleChange}
                    label="email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onHandleChange={handleChange}
                    label="password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onHandleChange={handleChange}
                    label="confirmPassword"
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>

        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: newUser => dispatch(signUpStart(newUser))
})

export default connect(null, mapDispatchToProps)(SignUp);