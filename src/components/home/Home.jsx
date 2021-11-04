import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'


const Home = (props) => {



return (
    <div className="home">
        <section className="body">
            <div className="logomain">
                <img className="imgmain" src={logo}></img>
            </div>
            <div className="divbutt">   
                <button className="buttonScan">
                    <Link to="/DisplayScan">Je scanne</Link>
                </button>
            </div>
            <div className="divbutt2">
                <button className="buttonmenu">
                    <Link to="/DisplayCode">Fiche Produit</Link>
                </button>
            </div>
        </section>
    </div>
)
}
export default Home;