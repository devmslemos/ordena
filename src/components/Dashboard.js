import React, { useState, useEffect, useCallback } from 'react';
import '../assets/styles.css';
import logo from "../images/Logo.svg";
import instagramIcon from '../images/instagram.svg';
import youtubeIcon from '../images/youtube.svg';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [servicos, setServicos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceData, setServiceData] = useState({
    service_id: null,
    service_name: '',
    description: '',
    price: '',
    duration: '',
  });


  const fetchServicos = useCallback(async (query = '') => {
    try {
      const response = await fetch(`http://localhost/ordena/servicos/get_services/get_services.php?query=${query}`);
      const data = await response.json();

      if (data.success) {
        setServicos(data.data); 
      } else {
        console.error('Erro ao buscar serviços:', data.message);
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
    }
  }, []);

  useEffect(() => {
    fetchServicos(searchQuery);
  }, [searchQuery, fetchServicos]);

 
  const handleCreateService = async (e) => {
    e.preventDefault();
    const { service_name, description, price, duration } = serviceData;
  
    if (!service_name || !description || !price || !duration) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost/ordena/servicos/create_services/create_services.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });
  
      const data = await response.json();
      if (data.success) {
        alert('Serviço criado com sucesso!');
        fetchServicos(searchQuery);
        setServiceData({ 
          service_id: null,
          service_name: '',
          description: '',
          price: '',
          duration: '',
        });
      } else {
        alert('Erro ao criar serviço');
      }
    } catch (error) {
      console.error('Erro ao criar serviço:', error);
      alert('Erro de conexão ao criar serviço.');
    }
  };
  

  const handleUpdateService = async (e) => {
    e.preventDefault();
    const { service_name, description, price, duration } = serviceData;
  
    if (!service_name || !description || !price || !duration) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost/ordena/servicos/update_services/update_services.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });
  
      const data = await response.json();
      if (data.success) {
        alert('Serviço atualizado com sucesso!');
        fetchServicos(searchQuery);
      } else {
        alert('Erro ao atualizar serviço');
      }
    } catch (error) {
      console.error('Erro ao atualizar serviço:', error);
      alert('Erro de conexão ao atualizar serviço.');
    }
  };
  
  
  const handleDeleteService = async (service_id) => {
    if (window.confirm('Tem certeza que deseja deletar este serviço?')) {
      try {
        const response = await fetch('http://localhost/ordena/servicos/delete_services/delete_services.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ service_id }),
        });
  
        const data = await response.json();
        if (data.success) {
          alert('Serviço deletado com sucesso!');
          fetchServicos(searchQuery);
        } else {
          alert('Erro ao deletar serviço');
        }
      } catch (error) {
        console.error('Erro ao deletar serviço:', error);
        alert('Erro de conexão ao deletar serviço.');
      }
    }
  };
  

  const handleEditService = (service) => {
    setServiceData({
      service_id: service.service_id,
      service_name: service.service_name,
      description: service.description,
      price: service.price,
      duration: service.duration,
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
  };

  const resetForm = () => {
    setServiceData({
      service_id: null,
      service_name: '',
      description: '',
      price: '',
      duration: '',
    });
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
        </div>
        <div className="menu-toggle" id="menuToggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="nav-links" id="navLinks">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Perfil</Link>
        </div>
      </nav>

      <div className="container">
        <div className="content">
          <h1 className="text-shadow">Bem-vindo à sua Dashboard</h1>
          <p className="text-shadow">
            Aqui você pode gerenciar seus agendamentos, buscar novos serviços e visualizar os serviços adquiridos.
          </p>
        </div>
      </div>
      <div className="service-form">
      <h2>Buscar Serviços:</h2>
        <input
          type="text"
          placeholder="Digite o serviço que deseja buscar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <h2>{serviceData.service_id ? 'Atualizar Serviço' : 'Criar Novo Serviço'}</h2>
        <form onSubmit={serviceData.service_id ? handleUpdateService : handleCreateService}>
  <input
    type="text"
    name="service_name"
    value={serviceData.service_name || ''}
    onChange={(e) => setServiceData({ ...serviceData, service_name: e.target.value })}
    placeholder="Nome do Serviço"
    required
  />
  <input
    type="text"
    name="description"
    value={serviceData.description || ''}
    onChange={(e) => setServiceData({ ...serviceData, description: e.target.value })}
    placeholder="Descrição"
    required
  />
  <input
    type="number"
    name="price"
    value={serviceData.price || ''}
    onChange={(e) => setServiceData({ ...serviceData, price: e.target.value })}
    placeholder="Preço"
    required
  />
  <input
    type="number"
    name="duration"
    value={serviceData.duration || ''}
    onChange={(e) => setServiceData({ ...serviceData, duration: e.target.value })}
    placeholder="Duração (em minutos)"
    required
  />
  <div className="form-buttons">
    <button className="submitbutton" type="submit">
      {serviceData.service_id ? 'Atualizar Serviço' : 'Criar Serviço'}
    </button>
    {serviceData.service_id && (
      <button
        type="button"
        className="resetbutton"
        onClick={resetForm}
      >
        Voltar para Criar Serviço
      </button>
    )}
  </div>
</form>


      </div>

      <div className="middle">
        <h2>Agende Novos Serviços</h2>
        <ul className="content-list">
          {servicos.length > 0 ? (
            servicos.map((servico) => (
              <li key={servico.service_id}>
                <h3>{servico.service_name}</h3>
                <p>{servico.description}</p>
                <p>Preço: {servico.price}</p>
                <p>Duração: {servico.duration} minutos</p>
                <button onClick={() => handleEditService(servico)}>Editar</button>
                <button onClick={() => handleDeleteService(servico.service_id)}>Deletar</button>
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

export default Dashboard;
