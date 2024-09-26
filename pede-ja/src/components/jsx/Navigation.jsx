import '../css/Navigation.css'

function Navigation() {
    return (
        <div className='navigation'>
            <section className='box-nav'>
                <nav>
                    <ul>
                        <li>
                            <a href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#promo">
                                Promoções
                            </a>
                        </li>
                        <li>
                            <a href="#pedeLover">
                                Pede Lover
                            </a>
                        </li>
                        <li>
                            <a href="#pedeCard">
                                Pede Card
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Navigation