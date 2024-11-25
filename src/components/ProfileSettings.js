import React, { useState, useEffect } from 'react';
import '../assets/styles.css'; // Importe o arquivo CSS
import logo from "../images/Logo.svg";
import instagramIcon from '../images/instagram.svg';
import youtubeIcon from '../images/youtube.svg';
import { Link } from 'react-router-dom';

const ProfileSettings = () => {
  const [profile, setServicos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Função para buscar serviços no banco de dados
  const fetchServicos = async (query = '') => {
    try {
      const response = await fetch(`http://localhost/ordena/profilesettings/profilesettings.php?query=${query}`);
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
          <h1 className="text-shadow">Configurações</h1>
        </div>
      </div>
      <div className="profileSettingsCont">
      <div className="middle">
        <h2>Seus Dados</h2>
        <ul className="content-list2">
          {profile.length > 0 ? (
            profile.map((profile) => (
              <li key={profile.id}>
                <h3>{profile.username}</h3>
                <p>{profile.email}</p>
                <p>{profile.usertype}</p>
                <p>{profile.full_name}</p>
                <button className="editbtton">Editar Informações</button>
              </li>
            ))
          ) : (
            <p>Nenhum serviço encontrado.</p>
          )}
        </ul>
      </div>
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

export default ProfileSettings;
