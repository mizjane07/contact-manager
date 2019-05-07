import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextInputGroup = ({
    label,
    name,
    value,
    placeHolder,
    type,
    onChange,
    error
})=> {
    
  return (
    <div className = "form-group">
                <label htmlFor={name}> Name </label>
                <input  type={type}
                        name={name}
                        className = {classnames('form control form-control-lg', {'is-invalid': error})}
                        placeHolder={placeHolder}
                        value={value}
                        onChange={onChange}
                   />
                   {error && <div className='invalid-feedback'>{error}</div>}
                   
                </div>
  );
};
    TextInputGroup.propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeHonder: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        error: PropTypes.string
    }

    TextInputGroup.default = {
        type: 'text'
    }

export default TextInputGroup;
