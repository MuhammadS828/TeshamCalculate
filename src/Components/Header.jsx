import React from "react";
import logo from "../assests/PNG/logoWhite.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Логотип" />
      <div className="headerText">Калькулятор рассрочки</div>
    </div>
  );
};

export default Header;
