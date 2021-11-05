import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'



const Home = (props) => {



return (
    <main className="home">
        <section className="body">
            <div className="logomain">
                <img className="imgmain" src={logo}></img>
            </div>
            <div className="buttonhome">
            <div className="wrapbutton">   
                <button className="buttonScan">
                    <Link to="/DisplayScan">Je scanne</Link>
                </button>
            </div>
            <div className="wrapbutton2">
                <button className="buttonmenu">
                    <Link to="/DisplayCode">Fiche Produit</Link>
                </button>
            </div>
            </div>
        </section>
    </main>
)
}
export default Home;