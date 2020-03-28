import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

import './styles.css';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>
        <form>
          <h1>Faça sua logon</h1>
          <input type="text" placeholder="Sua ID" />
          <button type="submit" className="button">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={18} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
