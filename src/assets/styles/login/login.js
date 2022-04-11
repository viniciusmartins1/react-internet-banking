import styled from 'styled-components'


export const customStyles = {
  buttonLogin: {
    color: "white",
    background: "#c44c8a",
    height: "50px",
    fontSize: "16px",
    fontFamily: 'Secular One',
    marginTop: "5%",
  },
  buttonForgotPass: {
    color: "gray",
    background: "none",
    border: "none",
    fontSize: "12px",
    fontFamily: 'Arial',
    marginTop: "5%"
  },
  checkRememberPass: {
    paddingRight: "20%",
    paddingLeft: "0%",
    marginTop: 5
  },
  buttonConfirmModal: {
    background: "#4CAF50",
    width: 150,
    height: "40px",
    border: "none",
    borderRadius: "3px",
    color: "white",
    fontSize: "14px",
    fontFamily: "'Open Sans', sans-serif",
    marginLeft: "200%"
  },
  warningHelpText: {
    color: "red",
    fontSize: "12px",
  }
}

export const customStylesModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    width: 450,
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
}

export const Container = styled.div`
  background: linear-gradient(#c04c8b, #284fae);
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const ContainerLogin = styled.div`
  margin: 0 auto;
  background: #FAFAFA;
  width: 40vh;
  max-width: 550px;
  height: 70vh;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-family: 'Secular One', sans-serif;
  font-weight: bold;
  padding-bottom: 10%;
  padding-top: 7%;
`;

export const RememberPass = styled.p`
  font-size: 14px;
`;

export const TitleModal = styled.h2`
  font-size: 20px;
  margin-bottom: 3%;
  font-family: Open Sans;
  color: #c44c8a;
`

export const Description = styled.p`
  font-size: 14px;
  font-family: Open Sans;
  margin-bottom: 3%;
`;
