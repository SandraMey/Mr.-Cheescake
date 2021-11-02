import {React, useState} from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import axios from 'axios';
import DisplayCode from './components/api/DisplayCode';
import DisplayScan from './components/Scan/DisplayScan';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/Home';



function App() {

  const getOpenFoodFact = () => {
    // Send the request 
    const codebarre = '04963406'
    axios
    .get(`https://fr.openfoodfacts.org/api/v2/product/${codebarre}`)
    .then((response) => response.data)
    .then((data) => {
    setProduct(data.product)
    })
    }

const [product, setProduct] = useState('')
  return (
    <div className="App">
      
      <Header />
      <Home />
      
      <DisplayScan product={product} 
      setProduct={setProduct}/>
      <Router>
        <Link to="/DisplayCode"><input type="codebarre" onChange={getOpenFoodFact}></input></Link>
      
      <Switch>
        <Route path="/DisplayCode" component={DisplayCode}/>
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
