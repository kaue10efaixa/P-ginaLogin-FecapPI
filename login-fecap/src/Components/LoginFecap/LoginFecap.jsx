import React from 'react';
import './LoginFecap.css';
import LogoFecap2 from './Assets/Imagens/LogoFecap2.png';  // Caminho relativo correto

const LoginFecap = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <div className="LogoFecap">
                <img src={LogoFecap2} alt="Logo Fecap" />  {/* Adiciona a imagem aqui */}
                </div>
                <div className="input-box">
                    <input type="text" placeholder='E-mail*' required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Senha*' required /> {/* Mudança aqui */}
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Lembrar-me</label>
                    <a href="#">Esqueceu sua Senha?</a>
                </div>

                <button type="submit">Acessar</button>

                <div className="register-link">
                    <p>Não possui uma conta? <a href="#">Criar conta</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginFecap;
