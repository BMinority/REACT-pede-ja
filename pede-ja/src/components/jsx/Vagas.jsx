import '../css/Vagas.css'

function Vagas() {
    const vagas = [
        {
            id: 1,
            titulo: 'Desenvolvedor Full Stack',
            descricao: 'Estamos procurando um desenvolvedor full-stack experiente para integrar nossa equipe de tecnologia.',
            requisitos: [
                'Experiência com JavaScript, React e Node.js',
                'Conhecimento em bancos de dados SQL e NoSQL',
                'Experiência com controle de versão (Git)',
            ],
            local: 'São Paulo, SP',
            tipo: 'Remoto',
        },
        {
            id: 2,
            titulo: 'Designer UX/UI',
            descricao: 'Procuramos um designer com experiência em criar interfaces intuitivas e atraentes para plataformas web.',
            requisitos: [
                'Conhecimento em ferramentas de design (Figma, Adobe XD)',
                'Habilidade em pesquisa de usuários e prototipagem',
                'Portfólio comprovado de trabalhos anteriores',
            ],
            local: 'Rio de Janeiro, RJ',
            tipo: 'Presencial',
        },
        {
            id: 3,
            titulo: 'Atendimento ao Cliente',
            descricao: 'Estamos em busca de uma pessoa comunicativa e proativa para integrar nosso time de atendimento ao cliente.',
            requisitos: [
                'Boa comunicação verbal e escrita',
                'Experiência prévia com atendimento ao cliente',
                'Disponibilidade para trabalhar em turnos',
            ],
            local: 'São Paulo, SP',
            tipo: 'Híbrido',
        },
    ];

    return (
        <div className="vagas-page">
            <div className="vagas-box">
                <section className="vagas-header">
                    <h1>Trabalhe Conosco</h1>
                    <p>Confira as oportunidades disponíveis e faça parte do time PedeJá.</p>
                </section>

                <section className="vagas-lista">
                    {vagas.map((vaga) => (
                        <div className="vaga-card" key={vaga.id}>
                            <h2>{vaga.titulo}</h2>
                            <p>{vaga.descricao}</p>
                            <h3>Requisitos:</h3>
                            <ul>
                                {vaga.requisitos.map((requisito, index) => (
                                    <li key={index}>{requisito}</li>
                                ))}
                            </ul>
                            <p><strong>Local:</strong> {vaga.local}</p>
                            <p><strong>Tipo:</strong> {vaga.tipo}</p>
                            <button className="apply-btn">Candidatar-se</button>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Vagas