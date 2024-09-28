import '../css/ShoppingWrapper.css'

function ShoppingWrapper() {
    return (
        <div className='shopping-wrapper'>
            <div className="sw-box">
                <header className="sw-header">
                    <h2>Tudo num só lugar</h2>
                </header>
                <main className="sw-options">
                    <ul className="box-sw-options">
                        <li>
                            <a href="#">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/doctors-bag.png" alt="doctors-bag" />
                                <p>
                                    Farmácia
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/shopping-basket.png" alt="shopping-basket" />
                                <p>
                                    Mercado
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/hamburger.png" alt="hamburger" />
                                <p>
                                    Lanches
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/lipstick.png" alt="lipstick" />
                                <p>
                                    Beleza
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/feminine-perfume-bottle.png" alt="feminine-perfume-bottle" />
                                <p>
                                    Perfumaria
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/basketball.png" alt="basketball" />
                                <p>
                                    Esportes
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/cat-footprint.png" alt="cat-footprint" />
                                <p>
                                    Pet Shop
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/wheelbarrow.png" alt="wheelbarrow" />
                                <p>
                                    Armazém
                                </p>
                            </a>
                        </li>
                    </ul>
                </main>
            </div>
        </div>
    )
}
export default ShoppingWrapper