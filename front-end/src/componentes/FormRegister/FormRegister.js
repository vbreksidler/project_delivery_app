import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../helpers/api';

function FormRegister() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [isDisableBtn, setIsDisableBtn] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);
  const [role, setRole] = React.useState('customer');
  const [user, setUser] = React.useState([]);

  const MIN = 6;
  const HTTP_CREATED = 201;

  useEffect(() => {
    function validateLogin() {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (emailRegex.test(email) && password.length >= MIN) {
        return setIsDisableBtn(false);
      } return setIsDisableBtn(true);
    } validateLogin();
  }, [name, email, password]);

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const response = await api.post('/register', { name, email, role, password });
      if (response.status === HTTP_CREATED) {
        setIsLogged(true);
        setErrorMessage(false);
        setUser(response.data);
      }
    } catch (error) {
      if (error.response.status) {
        return setErrorMessage('Dados mal inseridos ou usuário ja registrado.');
      } return setErrorMessage(false);
    }
  }

  return (
    isLogged ? (
      <Navigate to="/customer" />
    ) : (
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="name"
          placeholder="Seu Nome"
          data-testid="common_register__input-name"
          onChange={ ({ target }) => { setName(target.value); } }
          value={ name }
        />
        <input
          type="email"
          name="email"
          placeholder="seu-email@site.com.br"
          data-testid="common_register__input-email"
          onChange={ ({ target }) => { setEmail(target.value); } }
          value={ email }
        />
        <input
          type="password"
          name="password"
          placeholder="******"
          data-testid="common_register__input-password"
          onChange={ ({ target }) => { setPassword(target.value); } }
          value={ password }
        />
        <button
          type="submit"
          disabled={ isDisableBtn }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
        <p data-testid="common_register__element-invalid_register">
          {errorMessage}
        </p>
        <p>{ [user, setRole] }</p>
      </form>)
    // linha 83 pro lint nao reclamar
  );
}

export default FormRegister;
