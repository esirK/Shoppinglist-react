import React, {PropTypes} from 'react';

const TextInput = ({name = '', onChange, onBlur = '', value = '', disabled = false,  placeholder, type = 'text', step="1"}) =>{

    return (
        <div className="form-group">
            <input
                step={step}
                disabled={disabled}
                type={type}
                className="form-control"
                aria-required="true" required
                placeholder={placeholder}
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange} />
        </div>
    );

};

TextInput.propTypes = {
    name: PropTypes.string,
    step: PropTypes.string,
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default TextInput;