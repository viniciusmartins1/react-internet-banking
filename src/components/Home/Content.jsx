import React, { useState } from "react";
import { FaDollarSign, FaCheckCircle } from 'react-icons/fa'
import LateralMenu from "./LateralMenu";
import logoMaster from '../../assets/img/mastercard-logo.png';
import chipImg from '../../assets/img/chip.png';
import perfilImg from '../../assets/img/perfil.png';
import iconeServices from '../../assets/img/credit.png';
import iconeCards from '../../assets/img/two-credits.png';
import iconeRecharge from '../../assets/img/cell-pays.png';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ImgUser, TitleUser } from "../../assets/styles/home/home";


const customStyles = {
  balancePositive: {
    background: "#32CD32",
    borderLeft: "8px solid #32CD32"
  },
  balanceNegative: {
    background: "#DC143C",
    borderLeft: "8px solid #DC143C"
  }
}

const Content = () => {

  const userName = useSelector(state => state.reducerLogin.user.userName);
  const [balance, setBanlance] = useState(1000)
  const history = useHistory();

  const redirectCowoners = () => {
    history.push('/cotitulares/cadastrar');
  }

  const getModifier = () => {
    if (balance > 0) return customStyles.balancePositive
    if (balance < 0) return customStyles.balanceNegative

    return null;
  }


  return (
    <div className="container">
      <div className="grid-profile-name">
        <div>
          <ImgUser src={perfilImg} alt="Imagem do Profile" />
          <TitleUser>Bem-vindo, <span>{userName}</span></TitleUser>
        </div>
      </div>
      <div className="grid-cards-main">
        <div className="card-balance" style={getModifier()}>
          <h4>Saldo</h4>
          <i><FaDollarSign /></i>
          <h2>R$ <span>{balance}</span></h2>
        </div>
        <div className="card">
          <h4>Status da conta</h4>
          <i><FaCheckCircle /></i>
          <h2><span>Ativo</span></h2>
        </div>
        <div className="card card-co-titular">
          <h4>Co-Titulares</h4>
          <button onClick={redirectCowoners}>Novo Co-Titular</button>
          <h2><span>10</span></h2>
        </div>
      </div>
      <div className="grid-card">
        <div className="card-card-container">
          <div className="card-card">
            <div className="header">
              <div className="box-img">
                <img src={logoMaster} alt="mastercard" />
                <img src={chipImg} alt="chip" />
              </div>
            </div>
            <div className="footer">
              <p>Fatura atual</p>
              <h2>R$ 200,00</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-cards-images">
        <div className="container-cards-images">
          <div className="cards-images">
            <img src={iconeServices} alt="" />
            <h2>Serviços</h2>
          </div>
          <div className="cards-images">
            <img src={iconeCards} alt="" />
            <h2>Cartões</h2>
          </div>
          <div className="cards-images">
            <img src={iconeRecharge} alt="" />
            <h2> Recargas</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;