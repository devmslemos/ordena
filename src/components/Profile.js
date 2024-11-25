import React, { useState, useEffect } from 'react';
import '../assets/styles.css'; // Importe o arquivo CSS
import logo from "../images/Logo.svg";
import instagramIcon from '../images/instagram.svg';
import youtubeIcon from '../images/youtube.svg';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [servicos, setServicos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Função para buscar serviços no banco de dados
  const fetchServicos = async (query = '') => {
    try {
      const response = await fetch(`http://localhost/ordena/servicos/servicos.php?query=${query}`);
      const data = await response.json();
      
      if (data.success) {
        setServicos(data.data); // Atualiza os serviços no estado
      } else {
        console.error('Erro ao buscar serviços:', data.message);
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
    }
  };

  // Chama a função de busca sempre que o componente for montado ou a pesquisa for alterada
  useEffect(() => {
    fetchServicos(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Atualiza o valor de pesquisa
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="index.html">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="menu-toggle" id="menuToggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="nav-links" id="navLinks">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/settings">Configurações do Perfil</Link>
        </div>
      </nav>

      <div className="container">
        <div className="content">
          <h1 className="text-shadow">Bem-vindo ao seu Perfil</h1>
          <p className="text-shadow">
            Aqui você pode gerenciar seus agendamentos.
          </p>
        </div>
      </div>

      <div className="search-services">
        <h2>Gerencie seus Agendamentos</h2>
        <input
          type="text"
          placeholder="Digite o serviço que deseja buscar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="middle">
        <h2>Seus Agendamentos</h2>
        <ul className="content-list">
          {servicos.length > 0 ? (
            servicos.map((servico) => (
              <li key={servico.id}>
                <h3>{servico.service_name}</h3>
                <p>{servico.start_time} as {servico.end_time}</p>
                <p>{servico.username}</p>
                <button className="cancelBtton">Cancelar Agendamento</button>
              </li>
            ))
          ) : (
            <p>Nenhum serviço encontrado.</p>
          )}
        </ul>
      </div>

      <div className="footer">
        <footer>
          <ul className="socialmedia-list">
            <li>
              <a href="https://www.instagram.com/ordenasch/">
                <img className="ins-icon" src={instagramIcon} alt="Instagram" /> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@OrdenaSch">
                <img className="ytb-icon" src={youtubeIcon} alt="Youtube" /> Youtube
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Profile;
