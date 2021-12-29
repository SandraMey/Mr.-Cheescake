
import { React, useState } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductScan from "./components/ProductScan/ProductScan";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contacts";
import Resultproduct from "./components/api/Resultproduct";
import ProductId from "./components/api/ProductId/ProductId";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [product, setProduct] = useState("");
  
  return (
    
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ProductScan">
              <ProductScan product={product} setProduct={setProduct}/>
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Resultproduct/:searchTerm">
              <Resultproduct />
            </Route>
            <Route path="/ProductId/:id">
            <ProductId product={product} setProduct={setProduct}/>
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}
    
export default App;
