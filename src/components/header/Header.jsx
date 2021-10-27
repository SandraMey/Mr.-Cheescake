import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";
import Cheesecake from "../../assets/Cheesecake.jpg";


function Header() {

  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    value.length > 2 && setSearchTerm(value);
  };

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  
  return (
    <div className="header">
        <>
        <div className="searchBar">
            <input 
            type="text" 
            name="searchBar" 
            id="searchBar" 
            placeholder="Rechercher" 
            onChange = {handleSearchTerm}
            />

        </div>
        <div className="search__results">
            {datas
            .filter((val) => {
                return val.title.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((val) => {
                return (
                <div className="search__result" key={val.id}>
                    {val.title}
                </div>
                );
            })}
        </div>
        </>
        <div className="logo">
          <img src={Cheesecake}></img>
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
              Qui sommes nous
            </a>
          </li>
        </ul>
        <button className="navbar_burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </div>
  );
}
export default Header;
