import React, {PropTypes} from 'react';

const AlertMessage = ({message}) =>{
    let alertType = () => {
        return message.messageType === 'success' ? 'alert-success' : 'alert-danger';
    };
    let className = "col-sm-10 alert " + alertType();
    return (
        <div className={className}>
            {message.message}
        </div>
    );

};

AlertMessage.propTypes = {
    message: PropTypes.object.isRequired
};

export default AlertMessage;

