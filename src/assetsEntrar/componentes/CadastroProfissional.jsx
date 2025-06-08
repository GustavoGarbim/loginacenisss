import React, { useState } from 'react'
import styles from '../css/CadastroProfissional.module.css'
import fundoprofissional from '../images/fundoprofissional.png'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

function CadastroProfissional() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const [formData, setFormData] = useState({
    nameUser: '',
    emailUser: '',
    passwordUser: '',
    confirmarSenhaUser: '',
    job: '',
    register: '',
    tipo: 'PROFISSIONAL'
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nameUser || !formData.emailUser || !formData.passwordUser || !formData.confirmarSenhaUser) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (formData.passwordUser !== formData.confirmarSenhaUser) {
      alert('As senhas não coincidem.');
      return;
}
    
    try {
      const res = await fetch(`profissional/backend-acenis-production.up.railway.app/usuarios`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      if(res.ok) {
        alert('Cadastro realizado com sucesso!');
        setFormData({nameUser: '', emailUser: '', passwordUser: '', confirmarSenhaUser: '', job: '', register: '', tipo: 'PROFISSIONAL'});
      } else {
        alert('Erro no cadastro.');
      }
    } catch (error) {
      alert('Erro na conexão com a API.');
    }
  };

  return (
    <div className={styles.paginaCadastro}>
      <div className={styles.leftSection}>
        <img
          src={fundoprofissional}
          alt="Profissional de saúde com criança"
          className={styles.imagemCadastro}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.logoCadastro}>
          <h1>
            <span className={styles.logoAc}>Ac</span>
            <span className={styles.logoEnis}>enis</span>
          </h1>
          <div className={styles.tag}>
            <span>@acenisoficial</span>
          </div>
        </div>

        <div className={styles.tituloSecao}>
          <h2>PROFISSIONAIS</h2>
          <p className={styles.instrucao}>
            Crie sua conta agora.<br />
            Preencha todos os campos com atenção e revise as informações antes de concluir o cadastro.
          </p>
          <div className={styles.divisor}></div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>Nome Completo</label>
            <input
              type="text"
              name="nameUser"
              className={styles.input}
              value={formData.nameUser}
              onChange={handleChange}
            />

            <label className={styles.label}>E-mail</label>
            <input
              type="email"
              name="emailUser"
              className={styles.input}
              value={formData.emailUser}
              onChange={handleChange}
            />

            <label className={styles.label}>Senha</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="passwordUser"
                className={styles.input}
                value={formData.passwordUser}
                onChange={handleChange}
              />
              <button
                type="button"
                className={styles.showPasswordButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>

            <label className={styles.label}>Digite a senha novamente</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmarSenhaUser"
                className={styles.input}
                value={formData.confirmarSenhaUser}
                onChange={handleChange}
              />
              <button
                type="button"
                className={styles.showPasswordButton}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>

            <label className={styles.label}>Profissão / Especialidade</label>
            <input
              type="text"
              name="job"
              className={styles.input}
              value={formData.job}
              onChange={handleChange}
            />

            <label className={styles.label}>Registro profissional (CRM, etc.)</label>
            <input
              type="text"
              name="register"
              className={styles.input}
              value={formData.register}
              onChange={handleChange}
            />

            <button type="submit" className={styles.cadastroButton}>
              CRIAR CONTA
            </button>

            <Link to="/login" className={styles.loginLink}>
              <p>Já tenho uma conta</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroProfissional
