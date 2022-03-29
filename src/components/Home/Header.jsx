import React, { useState } from "react";
import styled from 'styled-components';
import { Popover, Typography } from "@mui/material";
import { Link, useHistory} from 'react-router-dom';
import { showLoading, hideLoading } from '../../redux/actions/AppActions'
import { logout } from '../../redux/actions/LoginActions'
import { useDispatch } from "react-redux";
import perfilImg from '../../assets/img/perfil.png';

const NavBar = styled.nav`
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

const Icon = styled.button`
  font-size: 24px;
  background: none;
  border: none; 
  color: #FAFAFA;
  cursor: pointer;
`;

const ImgProfile = styled.img`
  border-radius: 50%;
  width: 50px;
  border: 2px solid #284fae;
`;

const Title = styled.h2`
  font-size: 26px;
  
  color: #FAFAFA;
  font-family: 'Ramaraja', serif;
  letter-spacing: 2px;

  span {
    color: #FAFAFA;
  }
`;

const Header = () => {

  const [anchor, setAnchor] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };  

  const handleLogout = () => {
    dispatch(showLoading());
    
    setTimeout(() => {
      dispatch(hideLoading());
      dispatch(logout(true))
      history.push('/login');
    }, 3000)
  }

  return (
    <NavBar>
      <Title className="logo">Internet <span>Banking</span></Title>
      <Icon onClick={openPopover}>
        <ImgProfile src={perfilImg} alt="" />
      </Icon>
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "buttom",
          horizontal: "left",
        }}  
        onClose={() => setAnchor(null)}
        
      >
        <Link  to="/perfil" style={{textDecoration: 'none', color: 'black'}}><Typography sx={{ p: 2 }}>Perfil</Typography></Link>
        <Link to='#' onClick={handleLogout} style={{textDecoration: 'none', color: 'black'}}><Typography sx={{ p: 2 }}>Sair</Typography></Link>
      </Popover>
    </NavBar>

  );
}

export default Header;