import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as signUpActions from '../../actions/signupActions';

class SignUp extends React.Component{

    constructor(props, context){
        super(props, context);

        this.user =  {
            firstname: "",
            lastname: "",
            username: "",
            password: ""
        };

        this.state = {
            user: this.user
        };

        // bind event listeners to current state
        this.signUpUser = this.signUpUser.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateUserName = this.updateUserName.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }



    updateFirstName(event){
        this.user.firstname = event.target.value;
        this.updateState();
    }

    updatePassword(event){
        this.user.password = event.target.value;
        this.updateState();
    }

    updateUserName(event){
        this.user.username = event.target.value;
        this.updateState();
    }

    updateLastName(event){
        this.user.lastname = event.target.value;
        this.updateState();
    }

    updateState(){
        this.setState({user: this.user});
    }

    signUpUser(event){
        event.preventDefault();
        this.props.createUser(this.state.user);
    }

    render(){
        return(
            <div className="mid-right">
                <form method="post" onSubmit={this.signUpUser}>
                    <h1>Create account</h1>

                    <div className="form-group">
                        <input className="form-control" aria-required="true" required
                               placeholder="Your Sur Name"
                               value={this.state.user.firstname} onChange={this.updateFirstName} />
                    </div>

                    <div className="form-group">
                        <input className="form-control" aria-required required
                               placeholder="Your last name"
                               value={this.state.user.lastname} onChange={this.updateLastName}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" aria-required required
                               placeholder="Username eg. JamesDoe"
                               value={this.state.user.username} onChange={this.updateUserName}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" aria-required required
                               placeholder="Password"
                               value={this.state.user.password} onChange={this.updatePassword}/>
                    </div>

                    <br/>
                    <button className="btn btn-primary" type="submit">Create</button>

                </form>
                <div className="alt-link">
                    Already have an account? &nbsp;&nbsp;&nbsp;
                    <Link to="/login" className="btn btn-warning">Sign in</Link>
                </div>
            </div>
        );
    }


}

SignUp.propTypes = {
    user: PropTypes.object.isRequired,
    createUser: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch){
    return {
        createUser: bindActionCreators(signUpActions.createUser, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUp);