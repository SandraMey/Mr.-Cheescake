
import { React, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import axios from "axios";
import DisplayScan from "./components/Scan/DisplayScan";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {
  const getOpenFoodFact = () => {
    // Send the request
    const codebarre = "04963406";
    axios
      .get(`https://fr.openfoodfacts.org/api/v2/product/${codebarre}`)
      .then((response) => response.data)
      .then((data) => {
        setProduct(data.product);
      });
  };

  const [product, setProduct] = useState("");
  return (
    <div className="App">

      <Header />
      <Router>
       
          <div className="nav-btn">

            <button className="buttonmenu">
              <Link to="/">Home</Link>
            </button>
            <button className="buttonmenu">
              <Link to="/DisplayScan">Je scanne</Link>
            </button>

          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/DisplayScan">
              <DisplayScan />
            </Route>
          </Switch>
        
      </Router>
      <Footer />

    </div>
  );
}

export default App;
