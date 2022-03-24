import styled from 'styled-components'

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

export const Logo = styled.img`
  width: 30%;
  display: block;
  object-fit: contain;
`;

export const Warning = styled.span`
  font-size: 14px;
  color: #DC143C;
  font-family: Arial;
  padding-top: 5px;
  padding-bottom: 10px;
  display: block;
  text-align: left;
  margin-left: 15%;
`;
export const RememberPass = styled.p`
  font-size: 14px;
`;

export const TitleModal = styled.h2`
  font-size: 20px;
  margin-bottom: 3%;
  font-family: Arial;
  color: #c44c8a;
`

export const Description = styled.p`
  font-size: 16px;
  font-family: Arial;
  margin-bottom: 3%;
`;

export const ContainerUser = styled.div`
  width: 60%;
  height: 40px;
  border: 1.2px solid rgb(214, 210, 210);
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 2px;
  margin: auto 0px;
  padding-left: 2%;
  display: flex;
  align-items: center;
`;

export const InputUser = styled.input` 
margin-left: 3%;
`;

export const WarningModal = styled.span`
  font-size: 14px;
  color: #DC143C;
  font-family: Arial;
  padding-top: 5px;
  display: block;
  text-align: left;
  margin-left: 0%;
`;

export const Confirm = styled.button`
  background: #248eff;
  width: 20%;
  height: 30px;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  display: block;
  margin-top: 5%;
`;