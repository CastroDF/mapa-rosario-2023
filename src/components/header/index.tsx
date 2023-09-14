import React from "react";
import vll from "../../assets/images/viva-la-libertad.png";
import instagram from "../../assets/images/instagram.svg";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <header>
      <a href="https://www.instagram.com/vivalalibertad.ros/?igshid=MzRlODBiNWFlZA%3D%3D">
        <img className="vll-logo" src={vll} />
      </a>
      <div className="insta-logo-container">
        <a href="https://www.instagram.com/bunkerdelalibertad/?igshid=MzRlODBiNWFlZA%3D%3D">
          <img className="insta-logo" src={instagram} />
        </a>
      </div>
    </header>
  );
};

export default Header;
