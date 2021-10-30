import React from 'react'
import './Home.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DisplayScan from './Scan/DisplayScan';

const Home = (props) => {

return (
    <section className="body" >
        <div className="containerbutton">
            <div className="buttonscan">
            <Router>
                <div>
                <button className="button1" >
                <Link to="/DisplayScan">Je scanne</Link></button>
                <Switch>
                <Route path="/DisplayScan" component={DisplayScan}>
                    <DisplayScan />
                    </Route>
                </Switch>
                </div> 
             </Router>   
            </div>
           <div className="buttonconnect">
                <button className="button2">Je me connecte</button>
            </div>
        </div>
    </section>
)
}
export default Home;