import React, { useState } from "react";
import { Popover, Typography } from "@mui/material";
import { Link, useHistory} from 'react-router-dom';
import { showLoading, hideLoading } from '../../redux/actions/AppActions'
import { logout } from '../../redux/actions/LoginActions'
import { useDispatch } from "react-redux";
import perfilImg from '../../assets/img/perfil.png';
import { TitleLogo, Icon, ImgProfile, NavBar } from "../../assets/styles/home/home";


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
      <TitleLogo className="logo">Internet <span>Banking</span></TitleLogo>
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