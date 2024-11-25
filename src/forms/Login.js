import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate para redirecionamento
import '../assets/form.css'; // Importe o arquivo CSS
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para navegação

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
      // Envia os dados como JSON
      const response = await fetch('http://localhost/ordena/login/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Certifique-se de enviar como JSON
      });

      // Verifica se a resposta é JSON
      const result = await response.json();

      if (result.success) {
        alert(result.message);
        navigate('/home'); // Redireciona para a home em caso de sucesso
      } else {
        setError(result.message); // Exibe a mensagem de erro
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      setError('Ocorreu um erro ao enviar os dados.');
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
              <h2>Entrar</h2>
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
          </div>

          {error && <div className="error-message">{error}</div>} {/* Exibe mensagem de erro */}

          <div className="login-button">
            <button type="submit">Entrar</button>
          </div>
          <br />
          <div className="signup-link">
            <h4>Não tem uma conta? <Link to="/signup">Criar Conta</Link></h4>
          </div>
          <div>
            <p>© 2021 Ordena. Todos os direitos reservados.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
