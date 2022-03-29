import React from "react";
import { FaUserAlt, FaUserFriends , FaLandmark} from 'react-icons/fa';
import '../../assets/styles/home/home.css'
import { Link } from "react-router-dom";


const LateralMenu = () => {

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to='/' style={{ textDecoration: "none"}}><span><i><FaLandmark /></i>Home</span></Link>
          </li>
          <li>
            <Link to='/perfil' style={{ textDecoration: "none"}}><span><i><FaUserAlt /></i>Perfil</span></Link>
          </li>
          <li>
            <Link to='/cotitulares' style={{ textDecoration: "none"}}><span><i><FaUserFriends /></i>Co-Titulares</span></Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LateralMenu;