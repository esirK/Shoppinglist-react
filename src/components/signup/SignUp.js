import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import SignUpForm from './SignUpForm';
import LoadingAnimation from '../helpers/LoadingAnimation';

class SignUp extends React.Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            user: props.user,
            message: props.message
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.message.message !== ''){
            this.setState({
                message: nextProps.message
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
        this.props.createUser(this.state.user);
        // this.context.router.push('/lists')
    };

    render(){
        return(
            <div className="mid-right">
                <SignUpForm
                    onSubmit={this.signUpUser}
                    onChange={this.updateUserState}
                    user={this.state.user} />

                <br/>
                <br/>
                <div className="col-sm-10">
                    {this.state.message.message}
                </div>
                <br />
                <LoadingAnimation />

                <div className="alt-link">
                    Already have an account? &nbsp;&nbsp;&nbsp;
                    <Link to="/login" className="btn btn-warning">Sign in</Link>
                </div>
                <br />
            </div>
        );
    }


}

SignUp.propTypes = {
    createUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
};

SignUp.contextTypes = {
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
        message: state.message
    };
}

function mapDispatchToProps(dispatch){
    return {
        createUser: bindActionCreators(userActions.createUser, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUp);