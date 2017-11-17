import React, {PropTypes} from 'react';
import TextInput from '../helpers/TextInput';

const SignUpForm = ({user}) => {

    const signUpUser = (event) => {
        event.preventDefault();
        this.props.createUser(user);
    };

    return (
        <form method="post" onSubmit={signUpUser}>
            <h1>Create account</h1>

            <TextInput
                value={user.firstname}
                onChange={this.updateFirstName}
                placeholder="firstname"
                name="firstname"  />

            <TextInput
                value={user.lastname}
                onChange={this.updateLastName}
                placeholder="lastname"
                name="lastname"  />

            <TextInput
                value={user.username}
                onChange={this.updateUserName}
                placeholder="username"
                name="username"  />

            <TextInput
                value={user.password}
                onChange={this.updatePassword}
                placeholder="password"
                name="password"  />

            <br/>
            <button className="btn btn-primary" type="submit">Create</button>

        </form>
    );
};


export default SignUpForm;