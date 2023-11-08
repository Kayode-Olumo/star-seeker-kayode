import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLogo, NavWrapper } from "./styles/NavBar.styles";
import { SiStarship } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import Badge from "@mui/joy/Badge";

const NavBar = ({ favoritesData }) => {
  const navigate = useNavigate();

  const [navData, setNavData] = useState();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setNavData(favoritesData);
  }, [favoritesData]);
  return (
    <NavWrapper>
      <div className="nav-brand" onClick={() => navigate("/")}>
        <SiStarship className="nav-icon" />
        <NavLogo>starseeker</NavLogo>
      </div>

      <div
        className="nav-toggle"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        <span />
        <span />
        <span />
      </div>

      <div className="nav-links">
        <ul className={isNavOpen ? "open" : ""}>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/starseeker/gates/")}>Gates</li>
          <li onClick={() => navigate("/starseeker/cheap-travel")}>
            Cheap Travel
          </li>
          <Badge badgeContent={navData?.length}>
            <li onClick={() => navigate("/starseeker/favourites")}>
              Favourite
            </li>
          </Badge>
        </ul>
      </div>
    </NavWrapper>
  );
};

export default NavBar;
