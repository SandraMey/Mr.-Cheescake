import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";
import Cheesecake from "../../assets/Cheesecake.jpg";



function Header() {

  const [datas, setDatas] = useState ([]); 
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    value.length > 2 && setSearchTerm(value);
    console.log("coucou")
  };

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  
  return (
    <section className="header">
        <article className="searchBar">
            <input 
            type="text" 
            name="searchBar" 
            id="searchBar" 
            placeholder="Rechercher" 
            />
        <button 
          className="searchButton"
          type="button"
          onClick = {handleSearchTerm}
          >
        </button>
        </article>
        <article className="search__results">
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
        </article>
        <article className="logo">
          <img src={Cheesecake}></img>
        </article>
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
    </section>
  );
}
export default Header;
