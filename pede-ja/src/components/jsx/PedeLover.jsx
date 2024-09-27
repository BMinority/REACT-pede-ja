import '../css/PedeLover.css'

function PedeLover() {
    const plans = [
        {
            id: 1,
            name: 'Plano Semanal',
            description: 'Promoções exclusivas toda semana!',
            price: 'R$ 9,90 / semana',
            benefits: [
                'Promoções exclusivas',
                'Desconto em todos os pedidos',
                'Ofertas relâmpago semanais'
            ]
        },
        {
            id: 2,
            name: 'Plano Mensal',
            description: 'Descontos maiores e promoções especiais por mês.',
            price: 'R$ 29,90 / mês',
            benefits: [
                'Promoções exclusivas',
                'Desconto maior em todos os pedidos',
                'Ofertas mensais especiais'
            ]
        },
        {
            id: 3,
            name: 'Plano Anual',
            description: 'A melhor opção para quem ama descontos o ano todo!',
            price: 'R$ 299,90 / ano',
            benefits: [
                'Promoções exclusivas todo o ano',
                'Desconto máximo em pedidos',
                'Acesso antecipado às promoções'
            ]
        }
    ];

    return (
        <div className="pede-lover-page">
            <div className="pede-lover-box">
                <h1>Pede Lover: Seu Programa de Fidelidade</h1>
                <p>Assine um de nossos planos e aproveite promoções exclusivas, descontos em pedidos, e muito mais!</p>

                <div className="plans-grid">
                    {plans.map((plan) => (
                        <div className="plan-card" key={plan.id}>
                            <h3>{plan.name}</h3>
                            <p>{plan.description}</p>
                            <p className="plan-price">{plan.price}</p>
                            <ul>
                                {plan.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                            <h4>Métodos de Pagamento</h4>
                            <div className="payment-methods">
                                <i className="fa-solid fa-credit-card"></i>
                                <i className="fa-solid fa-money-bill-wave"></i>
                                <i className="fa-brands fa-pix"></i>
                            </div>
                            <button className="subscribe-button">Assine Agora</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PedeLover