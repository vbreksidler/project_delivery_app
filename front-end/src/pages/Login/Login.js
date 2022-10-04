import React from 'react';
import FormLogin from '../../componentes/Forms/FormLogin';
import Logo from '../../Logo.png';
import './Login.css';

function Login() {
  return (
    <div className="LoginPage">
      <img src={ Logo } alt="logo" className="Logo" />
      <div className="Divisor" />
      <FormLogin />
    </div>
  );
}

export default Login;
