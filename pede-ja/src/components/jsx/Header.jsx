import PedeIcon from '../../assets/Pede_Ja.png'
import '../css/Header.css'

function Header() {
    return (
        <div className="header-pede">
            <div className="pede-icon">
                <img src={PedeIcon} alt="Ícone do Pede Já" />
            </div>
            <div className="pede-options">
                <a href="#">
                    Sobre nós
                </a>
                <a href="#">
                    Vagas
                </a>
                <a href="#">
                    Contato
                </a>
            </div>
            <div className="pede-login">
                <a href="#">
                    Criar conta
                </a>

                <a href="#" className="enter">
                    ENTRAR
                </a>
            </div>
        </div>
    )
}

export default Header