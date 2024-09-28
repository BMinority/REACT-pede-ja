import '../css/Home.css'
import ShoppingWrapper from './ShoppingWrapper';

import Promo_01 from '../../assets/Promo_marmita.png';
import Promo_02 from '../../assets/Promo_prato_do_dia.png';
import Promo_03 from '../../assets/Promo_cerveja.png'

function Home() {
    return (
        <div className="home">
            <div className="home-box">
                <section className="banner">
                    <h1>Bem-vindo ao Pede Já!</h1>
                    <p>Peça seus pratos favoritos com rapidez e conveniência</p>
                    <a href="#">
                        <button>Peça Agora</button>
                    </a>
                </section>

                <section className="promo-section">
                    <h2>Promoções Especiais</h2>
                    <div className="promo-cards">
                        <div className="promo-card">
                            <a href="#">
                                <img src={Promo_01} alt="imagem promoção" />
                            </a>
                        </div>
                        <div className="promo-card">
                            <a href="#">
                                <img src={Promo_02} alt="imagem promoção" />
                            </a>
                        </div>
                        <div className="promo-card">
                            <a href="#">
                                <img src={Promo_03} alt="imagem promoção" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="shopping-wrapper">
                    <ShoppingWrapper />
                </section>

                <section className="testimonials">
                    <h2>O que nossos clientes estão dizendo</h2>
                    <div className="testimonial">
                        <p>Ótimo serviço, entrega super rápida!</p>
                        <span>- João S.</span>
                    </div>
                    <div className="testimonial">
                        <p>As promoções são incríveis, vale muito a pena.</p>
                        <span>- Maria F.</span>
                    </div>
                </section>

                <section className="newsletter">
                    <h2>Assine nossa Newsletter</h2>
                    <input type="email" placeholder="Digite seu email" />
                    <button>Inscrever-se</button>
                </section>
            </div>
        </div>
    );
}

export default Home;
