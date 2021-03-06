import styled from "styled-components"


export const TitleTable = styled.h2`
  font-size: 28px;

  @media (max-width: 540px) {
    font-size: 23px;
  }
`;

export const NewCoOwner = styled.button`
  border: none;
  color: white;
  background: #c44c8a;
  border-radius: 10px;
  height: 45px;
  width: 180px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif; 
  cursor: pointer;
  margin-top: 5%;

  @media (max-width: 540px) {
    height: 35px;
    width: 180px;
    font-size: 14px;
  }
`;