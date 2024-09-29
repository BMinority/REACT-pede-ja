import '../css/Footer.css'

function Footer() {
    return (
        <footer className="footer-container">
            <p>&copy; 2024 Todos os direitos reservados - Bruno Coelho</p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/dev_bcoelho" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/BMinority" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer