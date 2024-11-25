import React, { useState } from "react";
import '../assets/styles.css'; 
import { Link } from 'react-router-dom';
import imageHome from "../images/imagem_home.svg"
import logo from "../images/Logo.svg"
import instagramIcon from '../images/instagram.svg';
import youtubeIcon from '../images/youtube.svg';

const Home = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);  // Alterna o estado do menu (aberto/fechado)
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-links ${menuActive ? 'active' : ''}`}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/news"> Novidades</Link>
          <Link to="/resources"> Recursos</Link>
          <Link to="/plans"> Planos</Link>
          <a href="mailto:contato.ordenasch@gmail.com?subject=Assunto%20do%20Email&body=Escreva%20sua%20mensagem%20aqui.">Contato</a>
          <Link to="/login"> Entrar</Link>
          <Link to="/signup"> Registrar-se</Link>
        </div>
      </nav>

      <div className="container">
        <div className="content">
          <h1 className="text-shadow">Bem-vindo ao Ordena!</h1>
          <p className="text-shadow">
            Estamos entusiasmados em apresentar a você a nossa inovadora plataforma de agendamentos de serviços online, projetada para facilitar a sua vida. 
            <br /><br />
            No Ordena, entendemos a importância de gerenciar seu tempo de forma eficiente e conveniente, 
            e é por isso que criamos um sistema intuitivo e fácil de usar para agendar todos os tipos de serviços, 
            desde consultas médicas até sessões de beleza e muito mais.
          </p>
        </div>
        <div className={imageHome}>
          <img src="images/imagem_home.svg" alt="" />
        </div>
      </div>

      <div className="middle">
        <h2>O que oferecemos:</h2>
        <ul className="services-list">
          <li><b>Facilidade de Uso: </b>Nossa interface amigável permite que você agende serviços em apenas alguns cliques, seja pelo computador ou pelo celular.</li>
          <li><b>Variedade de Serviços: </b>Encontre uma ampla gama de profissionais e serviços em diversas categorias, prontos para atender às suas necessidades.</li>
          <li><b>Agendamento Flexível: </b>Escolha o dia e a hora que melhor se encaixam na sua rotina, com a possibilidade de remarcar ou cancelar com facilidade.</li>
          <li><b>Confirmações e Lembretes: </b>Receba confirmações instantâneas e lembretes automáticos para nunca perder um compromisso.</li>
          <li><b>Segurança e Confiabilidade: </b>Todos os nossos prestadores de serviços são verificados e avaliados, garantindo a qualidade e a segurança do atendimento.</li>
        </ul>
        <h2>Como funciona:</h2>
        <ul className="how-works">
          <li><b>Navegue e Escolha: </b>Explore nossas categorias e encontre o serviço que você precisa.</li>
          <li><b>Agende Online: </b>Selecione o profissional, a data e o horário desejados.</li>
          <li><b>Confirmação Instantânea: </b>Receba uma confirmação imediata do seu agendamento.</li>
          <li><b>Aproveite o Serviço: </b>Compareça ao compromisso e desfrute de um atendimento de qualidade.</li>
        </ul>
        <p className="bottomtext">
          No Ordena, estamos comprometidos em proporcionar uma experiência de agendamento simples e eficiente, 
          para que você possa se concentrar no que realmente importa.
          <br />
          Experimente agora e descubra como podemos transformar a maneira como você organiza seus compromissos.<br />
          Estamos aqui para ajudar você a economizar tempo e simplificar sua vida.<br />
          Seja bem-vindo e aproveite tudo o que nossa plataforma tem a oferecer!
        </p>
      </div>

      <div className="footer">
        <footer>
          <ul className="socialmedia-list">
            <li><a href="https://www.instagram.com/ordenasch/"><img className="ins-icon" src={instagramIcon} alt="" /> Instagram</a></li>
            <li><a href="https://www.youtube.com/@OrdenaSch"><img className="ytb-icon" src={youtubeIcon} alt="" /> Youtube</a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Home;
