import { React, useState } from "react";
import Search from "./Search"
import "./Header.css";
import Cheesecake from "../../assets/Cheesecake.jpg";



function Header() {

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const onSubmit = (products) => {
    console.log(products);
}

  
  return (
    <head className="header">
          <Search onSubmit={onSubmit}/>
        <div className="logoheader">
          <img className="imgheader" src={Cheesecake}></img>
        </div>
        <nav className={`navbar show-nav ${showLinks ? "show_nav" : "hide-nav"} `}>
        <ul className="navbar_links">
          <li className="navbar_item slideInDown-1">
            <a href="/" className="navbar_link">
              Home
            </a>
          </li>
          <li className="navbar_item slideInDown-2">
            <a href="/" className="navbar_link">
              Mes préférences
            </a>
          </li>
          <li className="navbar_item slideInDown-3">
            <a href="/" className="navbar_link">
              Mon garde manger
            </a>
          </li>
          <li className="navbar_item slideInDown-4">
            <a href="/" className="navbar_link">
              {/* remplacer link to a la place de href*/}
              Qui sommes nous
            </a>
          </li>
        </ul>
        <button className="navbar_burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </head>
  );
}
export default Header;




