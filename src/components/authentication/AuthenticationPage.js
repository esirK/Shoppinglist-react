import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import LoadingAnimation from '../helpers/LoadingAnimation';
import toastr from 'toastr';

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
            console.log("created");
            toastr.success('User account has been created.');
            // this.context.router.push('/login');
        }).catch(error => {
            toastr.error(error);
        });
    };


    loginUser = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state.user)
            .then(() => {
            console.log("logged in");
            toastr.success('User account has been created.');
            // this.context.router.push('/login');
        }).catch(error => {
            toastr.error(error);
        });
    };

    render(){
        return(
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

                <br />
                {this.state.loading && <LoadingAnimation />}

                <div className="alt-link">
                    Already have an account? &nbsp;&nbsp;&nbsp;
                    <Link to="/login" className="btn btn-warning">Sign in</Link>
                </div>
                <br />
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

function mapStateToProps(state, ownProps){
    let user = {
        firstname: "",
        lastname: "",
        username: "",
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