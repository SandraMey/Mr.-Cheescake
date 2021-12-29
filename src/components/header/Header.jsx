import { React, useState } from "react";
import Search from "./Search"
import "./Header.css";
import Cheesecake from "../../assets/Cheesecake.jpg";
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



function Header(searchTerm) {
  const history = useHistory();

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };


  const onSubmit = (searchTerm) => {
    if (searchTerm) {
      history.push(`/Resultproduct/${searchTerm}`)
    } else {
      alert('Aucun produit trouvé')
    }
  }


  return (
    <header className="header">
      <Search onSubmit={onSubmit} />
      <div className="logoheader">
        <a href="/"><img className="imgheader" src={Cheesecake}></img></a>
      </div>
      <nav className={`navbar show-nav ${ showLinks ? "show_nav" : "hide-nav" } `}>
        <ul className="navbar_links">
          <li className="navbar_item slideInDown-1">
            <a href="/" className="navbar_link">
              Home
            </a>
          </li>
          <li className="navbar_item slideInDown-2">
            <a href="/ProductScan" className="navbar_link">
              Je scanne
            </a>
          </li>
          <li className="navbar_item slideInDown-3">
            <a href="/Contact" className="navbar_link">
              Qui sommes-nous?
            </a>
          </li>
        </ul>
        <button className="navbar_burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </header>
  );
}
export default withRouter(Header);




