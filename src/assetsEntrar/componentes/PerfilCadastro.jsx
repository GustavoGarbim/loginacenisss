import React from 'react';
import styles from '../css/PerfilCadastro.module.css';
import maeImage from '../images/mae-icon.jpg'; 
import profissionalImage from '../images/profissional-icon.jpg';
import { Link, useNavigate } from 'react-router-dom';

function PerfilCadastro() {
  return (
    <div className={styles.perfilcontainer} >
      <div className={styles.perfilheader}>
         <Link to="/login" className={styles.backButton}>
     <h1>Voltar</h1>
        </Link>
      </div>

      <div className={styles.content}>

        <div className={styles.cardMae}>
          <img src={maeImage} alt="Mãe e criança" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>Sou mãe/responsável</h2>
          <p className={styles.cardText}>
            Acesso rápido para mães que buscam apoio, informações e serviços para seus filhos.
          </p>
       <Link to="/cadastro/mae" className={styles.buttonMae}> <p>CRIAR CONTA</p> </Link>   
        </div>


        <div className={styles.cardProfissional}>
          <img src={profissionalImage} alt="Profissional de saúde" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>Sou um profissional</h2>
          <p className={styles.cardText}>
            Aqui você já deixa tudo pronto para oferecer seus serviços e ajudar famílias.
          </p>
     <Link to="/cadastro/profissional" className={styles.buttonProfissional}>    <p> CRIAR CONTA </p> </Link> 
        </div>
      </div>
    </div>
  );
}

export default PerfilCadastro