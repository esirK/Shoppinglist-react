import React, {PropTypes} from 'react';

const TextInput = ({name = '', onChange, value = '', placeholder, type = 'text'}) =>{

    return (
        <div className="form-group">
            <input
                type={type}
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
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default TextInput;