import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CreateAccount.css';

function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('As senhas não coincidem');
            return;
        }

        // Simula a criacao de uma conta
        console.log({
            name,
            email,
            password
        });

        // Reset do formulario
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');

        // Redirecionamento para a página inicial
        navigate('/');
    };

    return (
        <div className="create-account">
            <div className="account-box">
                <h2>Criar Conta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="create-account-btn">Criar Conta</button>
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;
