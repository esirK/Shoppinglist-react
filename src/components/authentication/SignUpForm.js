import React, {PropTypes} from 'react';
import TextInput from '../helperComponents/TextInput';

const SignUpForm = ({user, onChange, onSubmit, loading}) => {

    return (
        <form onSubmit={onSubmit}>
            <h2>Get Started</h2>
            <h3>Sign up for an account</h3>

            <TextInput
                value={user.firstname}
                onChange={onChange}
                placeholder="firstname"
                name="firstname"/>

            <TextInput
                value={user.lastname}
                onChange={onChange}
                placeholder="lastname"
                name="lastname"/>

            <TextInput
                value={user.username}
                onChange={onChange}
                placeholder="username"
                name="username"/>

            <TextInput
                type="password"
                value={user.password}
                onChange={onChange}
                placeholder="password"
                name="password"/>

            <br />
            Security Question: &nbsp; {user.security_question}?
            <TextInput
                value={user.answer}
                onChange={onChange}
                placeholder="answer"
                name="answer"/>

            <br/>
            <input
                className="btn btn-primary"
                disabled={loading}
                type="submit"
                value={loading ? 'Processing...' : 'Sign Up'}/>

        </form>
    );
};

SignUpForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};


export default SignUpForm;