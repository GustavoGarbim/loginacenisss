import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import styles from '../css/LoginAcenis.module.css';
import fundologin from '../images/fotologin.jpg';

function LoginAcenis() {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  const handleRecovery = (e) => {
    e.preventDefault();
    console.log('Recuperação de senha para:', recoveryEmail);
    setShowForgotPassword(false);
    setRecoveryEmail('');
    alert('Se este e-mail existir, você receberá as instruções de recuperação.');
  };

  return (
    <div className={styles.paginalogin}>
      <div className={styles.leftSection}>
        <img 
          src={fundologin} 
          alt="Criança brincando" 
          className={styles.imagelogin} 
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.logologin}>
          <h1>
            <span className={styles.logoAc}>Ac</span>
            <span className={styles.logoEnis}>enis</span>
          </h1>
          <div className={styles.tag}>@acenisoficial</div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>E-mail</label>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className={styles.label}>Senha</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className={styles.showPasswordButton}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>

          <button
            type="button"
            className={styles.forgotPassword}
            onClick={() => setShowForgotPassword(true)}
          >
            Esqueci minha senha
          </button>

          <button type="submit" className={styles.loginButton}>
            ENTRAR
          </button>

          <p className={styles.register}>
            <Link to="/perfil">Não tem uma conta?</Link>
          </p>
        </form>
      </div>


      {showForgotPassword && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setShowForgotPassword(false)}
              aria-label="Fechar modal"
            >
              ✕
            </button>
            <h2>Recuperar senha</h2>
            <p>Informe seu e-mail para receber as instruções de recuperação.</p>
            <form onSubmit={handleRecovery}>
              <input
                type="email"
                placeholder="Seu e-mail"
                className={styles.input}
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                required
              />
              <div className={styles.modalButtons}>
                <button type="submit" className={styles.loginButton}>
                  Enviar
                </button>

              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginAcenis
