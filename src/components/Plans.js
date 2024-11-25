import React from 'react';
import '../assets/styles.css';
import logo from '../images/Logo.svg';
import plansImage from '../images/plans.svg';
import instagramIcon from '../images/instagram.svg';
import youtubeIcon from '../images/youtube.svg';
import { Link } from 'react-router-dom';

const Plans = () => {
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
          <h1 className="text-shadow">Planos</h1>
          <p className="text-shadow">
            Escolha o plano que melhor atende às suas necessidades e aproveite todos os benefícios da nossa plataforma.
            <br />
            <br />
            Cada plano oferece diferentes características e preços para se adequar ao seu perfil e necessidades.
          </p>
        </div>
        <div className="img-home">
          <img src={plansImage} alt="Planos" />
        </div>
      </div>

      <div className="middle">
        <h2>Escolha o Seu Plano:</h2>
        <ul className="plans-list">
          <li className="plan basic">
            <h3>Plano Básico</h3>
            <p>Ideal para uso pessoal e básico.</p>
            <p className="price">R$ 29,90/mês</p>
            <ul>
              <li>Acesso a funcionalidades principais</li>
              <li>Suporte básico</li>
            </ul>
            <a href="#">Assine agora</a>
          </li>
          <li className="plan standard">
            <h3>Plano Standard</h3>
            <p>Para usuários que precisam de mais recursos e suporte.</p>
            <p className="price">R$ 59,90/mês</p>
            <ul>
              <li>Todas as funcionalidades do Plano Básico</li>
              <li>Suporte prioritário</li>
              <li>Funcionalidades avançadas</li>
            </ul>
            <a href="#">Assine agora</a>
          </li>
          <li className="plan premium">
            <h3>Plano Premium</h3>
            <p>Para profissionais e empresas que precisam do máximo de flexibilidade e suporte.</p>
            <p className="price">R$ 99,90/mês</p>
            <ul>
              <li>Todas as funcionalidades do Plano Standard</li>
              <li>Suporte dedicado</li>
              <li>Funcionalidades premium exclusivas</li>
              <li>Acesso a eventos exclusivos</li>
            </ul>
            <a href="#">Assine agora</a>
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

export default Plans;
