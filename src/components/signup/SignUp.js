import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as signUpActions from '../../actions/signUpActions';
import SignUpForm from './SignUpForm';

class SignUp extends React.Component{

    constructor(props, context){
        super(props, context);

        this.user = () => {
            return {
                firstname: "",
                lastname: "",
                username: "",
                password: ""
            };
        };

        this.state = {
            user: this.user
        };
    }



    updateFirstName  = (event) => {
        this.user.firstname = event.target.value;
        console.log(this.user);
        this.updateState();
    };

    updatePassword= (event) => {
        this.user.password = event.target.value;
        this.updateState();
    };

    updateUserName= (event) => {
        this.user.username = event.target.value;
        this.updateState();
    };

    updateLastName= (event) => {
        this.user.lastname = event.target.value;
        this.updateState();
    };

    updateState(){
        this.setState({user: this.user});
    }

    signUpUser= (event) => {
        event.preventDefault();
        this.props.createUser(this.state.user);
    };

    render(){
        return(
            <div className="mid-right">
                <SignUpForm user={this.state.user} />

                <div className="alt-link">
                    Already have an account? &nbsp;&nbsp;&nbsp;
                    <Link to="/login" className="btn btn-warning">Sign in</Link>
                </div>
            </div>
        );
    }


}

SignUp.propTypes = {
    createUser: PropTypes.func.isRequired,
    user: PropTypes.array.isRequired
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