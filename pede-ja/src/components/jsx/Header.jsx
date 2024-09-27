import { useState } from 'react';
import { Link } from 'react-router-dom';
import PedeIcon from '../../assets/Pede_Ja.png';
import '../css/Header.css';

function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header-pede">
            <div className="pede-icon">
                <Link to="/">
                    <img src={PedeIcon} alt="Ícone do Pede Já" />
                </Link>
            </div>

            <div className="menu-hamburguer" onClick={toggleMenu}>
                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>

            {isMenuOpen && (
                <div className="dropdown-menu">
                    <Link to="/sobre-nos" onClick={toggleMenu}>Sobre nós</Link>
                    <Link to="/vagas" onClick={toggleMenu}>Vagas</Link>
                    <Link to="/contato" onClick={toggleMenu}>Contato</Link>
                    <Link to="/create-account" onClick={toggleMenu}>Criar conta</Link>
                    <button className="enter" onClick={toggleLoginModal}>ENTRAR</button>
                </div>
            )}

            <div className="pede-options">
                <Link to="/sobre-nos">Sobre nós</Link>
                <Link to="/vagas">Vagas</Link>
                <Link to="/contato">Contato</Link>
            </div>

            <div className="pede-login">
                <Link to="/create-account">Criar conta</Link>
                <button className="enter" onClick={toggleLoginModal}>ENTRAR</button>
            </div>

            {isLoginModalOpen && (
                <div className="login-modal">
                    <div className="modal-content">
                        <h2>Login</h2>
                        <input type="text" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <button className="login-btn">Entrar</button>
                        <button className="close-btn" onClick={toggleLoginModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
