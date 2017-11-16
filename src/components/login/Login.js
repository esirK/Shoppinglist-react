import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from "../../actions/loginActions";

class Login extends React.Component{

    constructor(props, context){
        super(props, context);

        this.user = {
            username: "",
            password: ""
        };

        this.state = {
            user: this.user
        };

        this.updateState = this.updateState.bind(this);
        this.updateUserName = this.updateUserName.bind(this);
        this.updateUserPassword = this.updateUserPassword.bind(this);
        this.logInUser = this.logInUser.bind(this);
    }

    updateUserName(event){
        this.user.username = event.target.value;
        this.updateState();
    }

    updateUserPassword(event){
        this.user.password = event.target.value;
        this.updateState();
    }

    updateState(){
        this.setState({user: this.user});
    }

    logInUser(event){
        event.preventDefault();
        this.props.authenticateUser(this.state.user);
    }

    render(){
        return(
            <div className="mid-right">
                <form method="post" onSubmit={this.logInUser}>
                    <h1>Login to your account</h1>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.user.username}
                               aria-required="true" required placeholder="Username" onChange={this.updateUserName} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" aria-required="true" required
                               value={this.state.user.password} placeholder="Password" onChange={this.updateUserPassword} />
                    </div>
                    <br />
                    <button className="btn btn-primary" type="submit">Login</button>
                    <br />
                    <br />
                    <br />
                        Don't have an account? &nbsp;&nbsp;&nbsp;
                    <Link to="/signup" className="btn btn-warning">Create one</Link>
                </form>
            </div>
        );
    }
}


Login.propTypes = {
    authenticateUser: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authenticateUser: bindActionCreators(loginActions.authenticateUser, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);