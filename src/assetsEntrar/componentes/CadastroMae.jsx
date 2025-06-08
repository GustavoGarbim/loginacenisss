import React, { useState } from 'react'
import styles from '../css/CadastroMae.module.css'
import fundocadastro from '../images/fundomae.png'
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

function CadastroMae() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const [formData, setFormData] = useState({
       nameUser: '',
       emailUser: '',
       passwordUser: '',
       confirmarSenhaUser: '',
       tipo: 'RESPONSAVEL' 
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

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }
       try {
         const res = await fetch(`/backend-acenis-production.up.railway.app/usuarios`, {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(formData),
         });
         if(res.ok) {
           alert('Cadastro realizado com sucesso!');
           setFormData({nameUser: '', emailUser: '', passwordUser: '', confirmarSenhaUser: '', tipo: 'RESPONSAVEL'});
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
          src={fundocadastro}
          alt="Criança brincando"
          className={styles.imagemCadastro}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.headerFixo}>
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
            <h2>MÃE/RESPONSÁVEL</h2>
            <p className={styles.instrucao}>
              Crie sua conta agora.<br />
              Preencha todos os campos com atenção e revise as informações antes de concluir o cadastro.
            </p>
            <div className={styles.divisor}></div>
          </div>
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
                type={showPassword ? "text" : "password"}
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
                type={showConfirmPassword ? "text" : "password"}
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

            <p className={styles.ou}>Ou</p>

            <div className={styles.socialButtons}>
              <button type="button" className={styles.socialButton}>
                <FaGoogle className={styles.socialIcon} />
                Google
              </button>
              <button type="button" className={styles.socialButton}>
                <FaFacebook className={styles.socialIcon} />
                Facebook
              </button>
              <button type="button" className={styles.socialButton}>
                <FaApple className={styles.socialIcon} />
                Apple
              </button>
            </div>

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

export default CadastroMae
