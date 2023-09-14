import React from "react";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <footer>
      <div className="divider" />
      <span className="rights">
        © 2023 <a href="https://github.com/CastroDF">CastroDF</a>. All rights
        reserved.
      </span>
    </footer>
  );
};

export default Header;
