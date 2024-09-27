import '../css/Promo.css'

import PizzaCalabresa from '../../assets/pizza-calabresa.jpg'
import BurguerDuplo from '../../assets/buguer-duplo.jpg'
import SundaeChocolate from '../../assets/sundae-chocolate.jpg'

function Promo() {
    const promos = [
        {
            id: 1,
            name: 'Pizza de Calabresa',
            description: 'Pizza crocante de calabresa com muito queijo',
            oldPrice: 'R$ 45,00',
            newPrice: 'R$ 29,90',
            image: PizzaCalabresa
        },
        {
            id: 2,
            name: 'Combo Burger',
            description: 'Hamburguer duplo com fritas e refrigerante',
            oldPrice: 'R$ 35,00',
            newPrice: 'R$ 24,90',
            image: BurguerDuplo
        },
        {
            id: 3,
            name: 'Sundae Chocolate',
            description: 'Delicioso sundae com calda quente de chocolate',
            oldPrice: 'R$ 18,00',
            newPrice: 'R$ 12,90',
            image: SundaeChocolate
        }
    ];

    return (
        <div className="promo-page">
            <div className="promo-box">
                <h1>Promoções Especiais</h1>
                <div className="promo-grid">
                    {promos.map((promo) => (
                        <div className="promo-card" key={promo.id}>
                            <img src={promo.image} alt={promo.name} />
                            <h3>{promo.name}</h3>
                            <p>{promo.description}</p>
                            <p className="old-price">{promo.oldPrice}</p>
                            <p className="new-price">{promo.newPrice}</p>
                            <button>Peça Agora</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Promo