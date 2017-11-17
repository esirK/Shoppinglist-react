import React, {PropTypes} from 'react';

const TextInput = ({name, onChange, value, placeholder}) =>{

    return (
        <div className="form-group">
            <input
                className="form-control"
                aria-required="true" required
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange} />
        </div>
    );

};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default TextInput;