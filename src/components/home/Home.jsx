import React from 'react'
import './Home.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DisplayScan from '../Scan/DisplayScan';


const Home = (props) => {

return (
    <div className="home">
    <section className="body" >
        <div className="containerbutton">
           <div className="buttonconnect">
                <button className="button2">Je me connecte</button>
            </div>
        </div>
    </section>
    </div>

)
}
export default Home;