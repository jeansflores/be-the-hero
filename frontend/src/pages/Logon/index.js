// import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
// import * as Yup from 'yup';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  // const formik = useFormik({
  //   initialValues: {
  //     id: '',
  //   },
  //   validateOnBlur: false,
  //   validateOnChange: false,
  //   validationSchema: Yup.object({
  //     id: Yup.string().required('Por favor digite um ID!'),
  //   }),
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça sua logon</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>
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
