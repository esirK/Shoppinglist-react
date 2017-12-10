import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import LoadingAnimation from '../helpers/LoadingAnimation';
import {showNotification} from "../helpers/sharedFunctions";
import WelcomeMessage from "./WelcomeMessage";

class AuthenticationPage extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {
            user: props.user,
            loading: props.loading,
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.loading !== this.state.loading){
            this.setState({
                loading: nextProps.loading
            });
        }
    }

    updateUserState = (event) => {
        const field = event.target.name;
        let user = this.state.user;
        user[field] = event.target.value;
        return this.setState({user: user});
    };

    signUpUser = (event) => {
        event.preventDefault();
        this.props.createUser(this.state.user)
            .then(() => {
                showNotification('success', 'User account has been created.');
            setTimeout(() => {
                showNotification('info', 'Authenticating......');
                this.loginUser(null);
            }, 1000);
        }).catch(error => {
            showNotification('error', error);
        });
    };


    loginUser = (event) => {
        if(event !== null) event.preventDefault();
        this.props.loginUser(this.state.user)
            .then(() => {
                showNotification('success', 'Logged in successfully');
                window.location.href = '/';
        }).catch(error => {
            showNotification('error', error);
        });
    };

    render(){

        return(
            <div>
                <WelcomeMessage />
                <div className="mid-right">
                    {this.props.module === 'signup' && <SignUpForm
                        onSubmit={this.signUpUser}
                        onChange={this.updateUserState}
                        loading={this.state.loading}
                        user={this.state.user} />}

                    {this.props.module === 'login' && <LoginForm
                        onSubmit={this.loginUser}
                        onChange={this.updateUserState}
                        loading={this.state.loading}
                        user={this.state.user} />}

                    <br/>
                    <br/>
                    {this.state.loading && <LoadingAnimation />}

                    {this.props.module === 'login' &&
                        <div className="alt-link">
                            Don't have an account yet? &nbsp;&nbsp;&nbsp;
                            <Link to="/signup" className="btn btn-warning">Sign Up</Link>
                        </div>
                    }
                    {this.props.module === 'signup' &&
                        <div className="alt-link">
                            Already have an account? &nbsp;&nbsp;&nbsp;
                            <Link to="/login" className="btn btn-warning">Sign in</Link>
                        </div>
                    }
                    <br />
                </div>
            </div>
        );
    }


}

AuthenticationPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

AuthenticationPage.contextTypes = {
    router: PropTypes.object
};

function getRandomSecurityQuestion() {
    const securityQuestions = [
        "What is your nickname",
        "What is your mothers last name",
        "Where did you get your pet from",
        "Who's your favourite artist",
        "Which country would you like to visit most",
        "What kind of a house would you like",
        "What are you doing right now",
        "Who was your first love",
        "What your most memorable day"
    ];
    const randomIndex = Math.floor(Math.random() * securityQuestions.length);
    return securityQuestions[randomIndex];
}

function mapStateToProps(state, ownProps){
    let user = {
        firstname: "",
        lastname: "",
        username: "",
        security_question: getRandomSecurityQuestion(),
        answer: "",
        password: ""
    };
    return {
        user: user,
        loading: state.ajaxCallsInProgress > 0,
        module: ownProps.route.module
    };
}

function mapDispatchToProps(dispatch){
    return {
        createUser: bindActionCreators(userActions.createUser, dispatch),
        loginUser: bindActionCreators(userActions.authenticateUser, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (AuthenticationPage);