import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import SignUpForm from './SignUpForm';
import LoadingAnimation from '../helpers/LoadingAnimation';
import AlertMessage from '../helpers/AlertMessage';

class AuthenticationPage extends React.Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            user: props.user,
            message: props.message,
            loading: props.loading,
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.message.message !== ''){
            this.setState({
                message: nextProps.message
            });
        }

        if(nextProps.loading !== this.state.loading){
            this.setState({
                loading: nextProps.loading
            });
        }

        if(nextProps.loading){
            this.setState({
                message: {message:''}
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
            // this.context.router.push('/login');
        });
    };

    render(){
        return(
            <div className="mid-right">
                <SignUpForm
                    onSubmit={this.signUpUser}
                    onChange={this.updateUserState}
                    loading={this.state.loading}
                    user={this.state.user} />

                <br/>
                <br/>

                {this.state.message.message !== '' &&  <AlertMessage message={this.state.message} />}

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
    createUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
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
        message: state.message,
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch){
    return {
        createUser: bindActionCreators(userActions.createUser, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (AuthenticationPage);