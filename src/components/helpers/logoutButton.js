import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logOut} from '../../actions/userActions';

class LogoutButton extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: props.loading
        };
    }

    logOutUser = (event) => {
        this.props.logOutUser();
    };

    render(){
        return(
            <div onClick={this.logOutUser} className="logout-link">
                <i className="fa fa-user"/> Logout
            </div>

        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logOutUser: bindActionCreators(logOut, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (LogoutButton);