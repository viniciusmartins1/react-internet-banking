import styled from 'styled-components';

export const ImgUser = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  transition: all .5s ease;

  &:hover {
    border: none;
    padding: 3%;
  }
`;

export const TitleUser = styled.h2`
  font-size: 20px;
  font-family: 'Open Sans', sans-serif; 
  transition: all .5s;

  span {
    color: #284fae;
    font-size: 23px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #284fae, #c04c8b);
  padding-left: 10%;
  padding-right: 10%;
  height: 7vh;
  margin: 10px;
  border-radius: 15px;
`;

export const Icon = styled.button`
  font-size: 24px;
  background: none;
  border: none; 
  color: #FAFAFA;
  cursor: pointer;
`;

export const ImgProfile = styled.img`
  border-radius: 50%;
  width: 50px;
  border: 2px solid #284fae;
`;

export const TitleLogo = styled.h2`
  font-size: 26px;
  
  color: #FAFAFA;
  font-family: 'Ramaraja', serif;
  letter-spacing: 2px;

  span {
    color: #FAFAFA;
  }
`;

export const TitleLogoColor = styled.h2`
  font-size: 32px;
  background-image: linear-gradient(to right, #284fae, #c04c8b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  font-family: 'Ramaraja', serif;
  letter-spacing: 2px;
  padding-bottom: 5%;

  span {
    color: #FAFAFA;
  }
`;