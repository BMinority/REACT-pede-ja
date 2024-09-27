import { useState } from 'react';
import '../css/PedeCard.css';
import CardImage from '../../assets/PedeJa-Card.png'

function PedeCard() {
    const [form, setForm] = useState({
        name: '',
        cpf: '',
        email: '',
        address: '',
        agreeToTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.agreeToTerms) {
            //enviar o formulário ao backend ou exibir uma mensagem.
            alert('Solicitação enviada com sucesso! Você será notificado após a análise de crédito.');
        } else {
            alert('Você precisa concordar com a análise de crédito para solicitar o cartão.');
        }
    };
    return (
        <div className="pede-card-page">
            <div className="pede-card-box">
                <div className="left-section">
                    <div className="card-image">
                        <img src={CardImage} alt="Cartão PedeJá Visa" />
                    </div>
                    <div className="benefits">
                        <h2>Vantagens do Cartão PedeJá:</h2>
                        <ul>
                            <li>Desconto de 10% em todos os pedidos no PedeJá.</li>
                            <li>Parcelamento exclusivo em até 12x sem juros.</li>
                            <li>Acesso antecipado às promoções e ofertas exclusivas.</li>
                            <li>Programa de recompensas: acumule pontos e troque por descontos.</li>
                        </ul>
                    </div>
                </div>

                <div className="right-section">
                    <h1>Solicite seu Cartão PedeJá Visa</h1>
                    <p>Sujeito à análise de crédito. Preencha o formulário abaixo para solicitar:</p>
                    <form className="card-request-form" onSubmit={handleSubmit}>
                        <label>
                            Nome Completo:
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            CPF:
                            <input
                                type="text"
                                name="cpf"
                                value={form.cpf}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            E-mail:
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Endereço Completo:
                            <input
                                type="text"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <div className="checkbox-label">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={form.agreeToTerms}
                                onChange={handleChange}
                            />
                            <label>
                                Concordo com a análise de crédito.
                            </label>
                        </div>
                        <button type="submit" className="submit-button">Solicitar Cartão</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PedeCard