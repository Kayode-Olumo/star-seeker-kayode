import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLogo, NavWrapper } from "./styles/NavBar.styles";
import { SiStarship } from "react-icons/si";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <div className="nav-brand" onClick={() => navigate("/")}>
        <SiStarship className="nav-icon" />
        <NavLogo>starseeker</NavLogo>
      </div>
      <div className="nav-toggle"></div>
      <div className="nav-links">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/starseeker/gates/")}>Gates</li>
          <li onClick={() => navigate("/starseeker/cheap-travel")}>
            Cheap Travel
          </li>
          <li>Favourite</li>
        </ul>
      </div>
    </NavWrapper>
  );
};

export default NavBar;
