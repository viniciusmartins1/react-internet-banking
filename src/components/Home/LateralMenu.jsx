import React from "react";
import { FaUserAlt, FaUserFriends, FaLandmark, FaUsers, FaUserTie } from 'react-icons/fa';
import '../../assets/styles/home/home.css'
import { Link } from "react-router-dom";


const LateralMenu = () => {

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link
              to='/'
              style={{ textDecoration: "none" }}
            >
              <span>
                <i><FaLandmark /></i>
                <p>Home</p>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/perfil'
              style={{ textDecoration: "none" }}
            >
              <span>
                <i><FaUserAlt /></i>
                <p>Perfil</p>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/cotitulares'
              style={{ textDecoration: "none" }}
            >
              <span>
                <i><FaUserTie /></i>
                <p>Co-Titulares</p>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LateralMenu;