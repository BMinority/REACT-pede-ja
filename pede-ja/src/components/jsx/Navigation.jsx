import { useState, useEffect } from 'react';
import '../css/Navigation.css';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('#home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (hash) => {
        setActiveItem(hash);
        setIsMenuOpen(false);
    };

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
                            <a href="#home" onClick={() => handleItemClick('#home')}>
                                Home
                            </a>
                        </li>
                        <li className={activeItem === '#promo' ? 'active' : ''}>
                            <a href="#promo" onClick={() => handleItemClick('#promo')}>
                                Promoções
                            </a>
                        </li>
                        <li className={activeItem === '#pedeLover' ? 'active' : ''}>
                            <a href="#pedeLover" onClick={() => handleItemClick('#pedeLover')}>
                                Pede Lover
                            </a>
                        </li>
                        <li className={activeItem === '#pedeCard' ? 'active' : ''}>
                            <a href="#pedeCard" onClick={() => handleItemClick('#pedeCard')}>
                                Pede Card
                            </a>
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
