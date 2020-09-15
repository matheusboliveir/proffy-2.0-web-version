import React from 'react';

import ProffyBanner from '../../components/ProffyBanner';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function Login() {

  return (
    <div className="page-login">
      <ProffyBanner />
      <main>
        <form>
          <legend>Fazer Login</legend>
          <AuthInput label="E-mail" name="email" position="top" />
          <AuthInput label="Senha" name="senha" position="bot" type="password" password />
          <Link to="/forgot">
            <p>Esqueci minha senha</p>
          </Link>
          <AuthButton value="Entrar" />
        </form>

        <div className="contentFooter">
          <div>
            <p>Não tem conta?</p>
            <Link to="/forgot">
              <p>Cadastre-se</p>
            </Link>
          </div>
          <p>É de Graça <img src={purpleHeartIcon} alt="Coração roxo" /> </p>
        </div>

      </main>
    </div>
  )

}

export default Login;
