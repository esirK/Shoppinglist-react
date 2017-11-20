import React, {PropTypes} from 'react';
import TextInput from '../helpers/TextInput';

const SignUpForm = ({user, onChange, onSubmit, loading}) => {

    return (
        <form method="post" onSubmit={onSubmit}>
            <h1>Create account</h1>

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

            <br/>
            <button
                className="btn btn-primary"
                disabled={loading}
                type="submit">
                Create
            </button>

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