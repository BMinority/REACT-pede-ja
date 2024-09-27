import { useState } from 'react';
import { Link } from 'react-router-dom';
import PedeIcon from '../../assets/Pede_Ja.png';
import '../css/Header.css';

function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    return (
        <div className="header-pede">
            <div className="pede-icon">
                <img src={PedeIcon} alt="Ícone do Pede Já" />
            </div>
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
