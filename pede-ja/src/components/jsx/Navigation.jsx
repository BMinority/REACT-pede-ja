import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('#home');

    //abrir/fechar o menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    //atualizar o item ativo e fechar o menu
    const handleItemClick = (hash) => {
        setActiveItem(hash);
        setIsMenuOpen(false);
    };

    //fechar o menu quando clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.navigation')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className={`navigation ${isMenuOpen ? 'open' : ''}`}>
            <section className='box-nav'>
                <nav>
                    <ul>
                        <li className={activeItem === '#home' ? 'active' : ''}>
                            <Link to="/" onClick={() => handleItemClick('#home')}>
                                Home
                            </Link>
                        </li>
                        <li className={activeItem === '#promo' ? 'active' : ''}>
                            <Link to="/promo" onClick={() => handleItemClick('#promo')}>
                                Promoções
                            </Link>
                        </li>
                        <li className={activeItem === '#pedeLover' ? 'active' : ''}>
                            <Link to="/pedeLover" onClick={() => handleItemClick('#pedeLover')}>
                                Pede Lover
                            </Link>
                        </li>
                        <li className={activeItem === '#pedeCard' ? 'active' : ''}>
                            <Link to="/pedeCard" onClick={() => handleItemClick('#pedeCard')}>
                                Pede Card
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <div className='navigation-btn' onClick={toggleMenu}>
                <i className={`fa-solid ${isMenuOpen ? 'fa-angle-left' : 'fa-angle-right'}`}></i>
            </div>
        </div>
    );
}

export default Navigation;
