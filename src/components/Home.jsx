import React from 'react'
import Cheesecake from './Assets/Cheesecake.jpg';
import homepics from './Assets/homepics.jpg';
import './Home.css';


const Home = (props) => {

return (
    <section className="body" >
        <div className="logomain">
            <img className="logo" src={Cheesecake}/>
        </div>
        <div className="containerbutton">
            <div className="buttonscan">
                <button className="button1">Je Scanne</button>
            </div>
            <div className="buttonconnect">
                <button className="button2">Je me connecte</button>
            </div>
        </div>
    </section>
)
}
export default Home;