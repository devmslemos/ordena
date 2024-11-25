import React, { useState } from 'react';
import '../assets/form.css';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    password: '',
    email: '',
    usertype: 'Cliente',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/ordena/signup/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        setFormData({
          username: '',
          fullname: '',
          password: '',
          email: '',
          usertype: 'Cliente',
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Ocorreu um erro ao enviar os dados.');
    }
  };

  return (
    <div className="container2">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-logo">
            <div className="Logo">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="form-header">
            <div className="title">
              <h2>Crie sua Conta</h2>
            </div>
          </div>

          <div className="input-group">
            <div className="input-box">
              <label htmlFor="username">Nome de Usuário *</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Digite seu Nome de Usuário"
                required
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="fullname">Nome Completo *</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Digite seu Nome Completo"
                required
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu E-mail"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Senha *</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Digite sua Senha"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="usertype">Tipo de Usuário *</label>
              <select
                id="usertype"
                name="usertype"
                value={formData.usertype}
                onChange={handleChange}
                required
              >
                <option value="Cliente">Cliente</option>
                <option value="Prestador de Serviços">Prestador de Serviços</option>
              </select>
            </div>
          </div>

          <div className="signup-button">
            <button type="submit">Crie sua Conta</button>
          </div>
          <br />
          <div className="termos">
            <label htmlFor="termos">
              Ao continuar você está de acordo com nossos <b>Termos de Uso</b> e <b>Política de Privacidade</b>
            </label>
          </div>
          <br />
          <div className="login-button">
            <h4>Já possui uma conta? <Link to="/login">Entrar</Link></h4>
            <h4><Link to="/dashboard">Ir para a Dashboard</Link></h4>
          </div>
          <div className="backhome">
            <h4><Link to="/">Voltar para Home</Link></h4>
          </div>
          <div>
            <p>© 2021 Ordena. Todos os direitos reservados.</p>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;
