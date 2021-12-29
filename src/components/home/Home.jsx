import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import scan from '../../assets/scan.jpeg';


const Home = (props) => {

return (
  
    <main className="home">
        <section className="body">
            <h1 className="intro">"Chez M. Cheesecake, nous sommes engagés pour vous aider à mieux comprendre vos choix de consommation. Faites le test, en scannant ou recherchant votre produit."</h1>
                <div className="img-container">
                    <a href='/ProductScan'><img className="scan-img" src={scan}></img></a>
                </div>
        </section>
    </main>
)
}
export default Home;