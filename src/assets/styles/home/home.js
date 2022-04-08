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
  font-size: 18px;
  font-family: 'Open Sans', sans-serif; 
  transition: all .5s;

  span {
    color: #284fae;
    font-size: 20px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #284fae, #c04c8b);
  padding-left: 13%;
  padding-right: 13%;
  height: 7vh;
  margin: 3px 5px 10px 5px;
  border-radius: 10px;
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
  font-size: 23px;
  
  color: #FAFAFA;
  font-family: 'Inter', sans-serif;
  letter-spacing: 3px;

  span {
    color: #FAFAFA;
  }
`;

export const TitleLogoColor = styled.h2`
  font-size: 28px;
  background-image: linear-gradient(to right, #284fae, #c04c8b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  // font-family: 'Ramaraja', serif;
  font-family: 'Inter', sans-serif;
  letter-spacing: 3px;
  padding-bottom: 5%;

  span {
    color: #FAFAFA;
  }
`;