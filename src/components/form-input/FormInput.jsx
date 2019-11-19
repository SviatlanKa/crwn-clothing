import React from 'react';
import './FormInput.scss';

const FormInput = ({ onHandleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={onHandleChange} {...otherProps}/>
            {
                label ?
                    (<label className={`${
                        otherProps.value.length ? "shrink " : ""
                    }
                    form-input-label`}>
                        {label}
                    </label>)
                    : null
            }
    </div>
);

export default FormInput;