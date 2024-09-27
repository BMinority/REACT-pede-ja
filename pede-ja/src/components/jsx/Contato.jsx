import '../css/Contato.css'

function Contato() {
    return (
        <div className="contato-page">
            <div className="contato-box">
                <section className="contato-info">
                    <h1>Entre em Contato</h1>
                    <p>Se você tiver alguma dúvida, sugestão ou apenas quiser falar com a gente, preencha o formulário abaixo ou utilize as informações de contato a seguir.</p>
                    <div className="contato-detalhes">
                        <div className="contato-item">
                            <i className="fa-solid fa-envelope"></i>
                            <span>contato@pedeja.com</span>
                        </div>
                        <div className="contato-item">
                            <i className="fa-solid fa-phone"></i>
                            <span>(11) 1234-5678</span>
                        </div>
                        <div className="contato-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Rua Fictícia, 123 - São Paulo, SP</span>
                        </div>
                    </div>
                </section>

                <section className="contato-form">
                    <h2>Envie uma mensagem</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Enviar Mensagem</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contato