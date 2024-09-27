import '../css/SobreNos.css'

function SobreNos() {
    return (
        <div className="sobre-nos-page">
            <div className="sobre-nos-box">
                <section className="sobre-nos-header">
                    <h1>Sobre o PedeJá</h1>
                    <p>Conheça a história e os valores que fazem do PedeJá uma empresa dedicada a oferecer o melhor serviço de entrega.</p>
                </section>

                <section className="sobre-nos-missao">
                    <h2>Nossa Missão</h2>
                    <p>
                        Nossa missão é conectar as pessoas aos melhores restaurantes, de forma rápida e prática, garantindo uma excelente experiência de entrega de comida, do pedido à sua porta.
                    </p>
                </section>

                <section className="sobre-nos-visao">
                    <h2>Nossa Visão</h2>
                    <p>
                        Ser referência em entregas no Brasil, reconhecida pela qualidade do serviço e pela inovação no setor de food delivery.
                    </p>
                </section>

                <section className="sobre-nos-valores">
                    <h2>Nossos Valores</h2>
                    <ul>
                        <li>Compromisso com a qualidade</li>
                        <li>Foco no cliente</li>
                        <li>Inovação constante</li>
                        <li>Responsabilidade social e ambiental</li>
                        <li>Ética e transparência</li>
                    </ul>
                </section>

                <section className="sobre-nos-equipe">
                    <h2>Nosso Time</h2>
                    <p>Conheça algumas das pessoas por trás do PedeJá.</p>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="path_to_member_image_1" alt="Nome do Membro 1" />
                            <h3>Nome do Membro 1</h3>
                            <p>CEO</p>
                        </div>
                        <div className="team-member">
                            <img src="path_to_member_image_2" alt="Nome do Membro 2" />
                            <h3>Nome do Membro 2</h3>
                            <p>CTO</p>
                        </div>
                        <div className="team-member">
                            <img src="path_to_member_image_3" alt="Nome do Membro 3" />
                            <h3>Nome do Membro 3</h3>
                            <p>CMO</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SobreNos