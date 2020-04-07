import React from 'react';
import './sign-Input.scss';

const SignInput = ({handleChange,label,...otherProps} )=> (


    <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>

);
export default SignInput;