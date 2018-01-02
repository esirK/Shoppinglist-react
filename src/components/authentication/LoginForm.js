import React, {PropTypes} from 'react';
import TextInput from '../helperComponents/TextInput';

const LoginForm = ({user, onChange, onSubmit, loading}) => {

    return (
        <form onSubmit={onSubmit}>
            <h3>Login to your account</h3>

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
            <input
                className="btn btn-primary"
                disabled={loading}
                type="submit"
                value={loading ? 'Authenticating...' : 'Login'}/>

        </form>
    );
};

LoginForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};


export default LoginForm;