import React, { InputHTMLAttributes } from 'react';

import './styles.css';

 function AuthButton(props:InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className="AuthBtn" disabled type="submit" {...props}/>
  )
}

export default AuthButton;