import React from "react";
import { useNavigate } from "react-router-dom";
import { FooterLogo, FooterWrapper } from "./styles/Footer.styles";
import { SiStarship } from "react-icons/si";
import Button from "../Button/Button";
import { quickLinks, supportLinks } from "../../data/data";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterWrapper>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <div className="nav-brand" onClick={() => navigate("/")}>
                <SiStarship
                  style={{
                    fontSize: "25px",
                    color: "var(--primary-color)",
                    marginRight: "5px",
                    width: "auto",
                  }}
                />
                <FooterLogo>starseeker</FooterLogo>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <span> +44 7943869997 </span>
            </li>
            <li>
              <span>kayode.dev@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Newsletter</h2>
          <div className="newsletter">
            <input type="text" placeholder="Your Email" />
            <Button text="Subscribe Now" />
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Copyright &copy; StarSeeker. Designed by <a href="/">Kayode Olumo</a>
        </span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
