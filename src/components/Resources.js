import React from 'react';
import '../assets/styles.css'; // Importe o arquivo CSS
import logo from '../images/Logo.svg';
import resourcesImage from '../images/resources.svg'; // Certifique-se de ter esta imagem no caminho correto
import instagramIcon from '../images/instagram.svg';
import youtubeIcon from '../images/youtube.svg';
import { Link } from 'react-router-dom';

const Resources = () => {
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
          <h1 className="text-shadow">Recursos</h1>
          <p className="text-shadow">
            Explore os recursos e ferramentas disponíveis para você na plataforma Ordena.
            <br />
            <br />
            Aqui você encontrará guias, tutoriais e outros materiais que ajudarão a maximizar seu uso dos nossos serviços.
          </p>
        </div>
        <div className="img-home">
          <img src={resourcesImage} alt="Recursos" />
        </div>
      </div>

      <div className="middle">
        <h2>Guias e Tutoriais:</h2>
        <ul className="resources-list">
          <li>
            <h3>Guia do Usuário</h3>
            <p>Um guia completo sobre como usar todas as funcionalidades da plataforma Ordena.</p>
            <a href="#">Leia mais</a>
          </li>
          <li>
            <h3>Tutoriais em Vídeo</h3>
            <p>Assista aos nossos tutoriais em vídeo para aprender como agendar e gerenciar seus compromissos.</p>
            <a href="#">Leia mais</a>
          </li>
          <li>
            <h3>FAQs</h3>
            <p>Encontre respostas para as perguntas mais frequentes sobre a nossa plataforma.</p>
            <a href="#">Leia mais</a>
          </li>
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
      <script src="menu.js" defer></script>

    </div>
  );
};

export default Resources;
