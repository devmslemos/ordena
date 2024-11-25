import React from 'react';
import '../App.css'; 
import logo from '../images/Logo.svg';
import newsImage from '../images/news.svg';
import instagramIcon from '../images/instagram.svg';
import youtubeIcon from '../images/youtube.svg';
import { Link } from 'react-router-dom';

const News = () => {
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
          <h1 className="text-shadow">Novidades</h1>
          <p className="text-shadow">
            Fique atualizado com as últimas notícias e atualizações sobre nossa plataforma.
            <br />
            <br />
            Aqui você encontrará informações sobre novos recursos, melhorias e eventos especiais que podem impactar sua experiência com o Ordena.
          </p>
        </div>
        <div className="img-home">
          <img src={newsImage} alt="Novidades" />
        </div>
      </div>

      <div className="middle">
        <h2>Últimas Atualizações:</h2>
        <ul className="news-list">
          <li>
            <h3>Nova Funcionalidade de Notificações</h3>
            <p>Agora você pode receber notificações em tempo real para os seus agendamentos e eventos importantes.</p>
            <a href="#">Leia mais</a>
          </li>
          <li>
            <h3>Integração com Calendários</h3>
            <p>Adicionamos a opção de sincronizar seus agendamentos com os calendários do Google e Outlook.</p>
            <a href="#">Leia mais</a>
          </li>
          <li>
            <h3>Novos Parceiros de Serviços</h3>
            <p>Expandimos nossa rede de prestadores de serviços para oferecer mais opções para você.</p>
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

export default News;
