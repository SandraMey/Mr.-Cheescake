import React from 'react';
import { useState } from "react";
import "./Search.css";
import axios from 'axios';


function Search() {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [product, setProduct] = useState('')


    const handleSearchTerm = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchTerm(value);
    };
    const getOpenFoodFact = () => {
    // Send the request 
    const codebarre = 'camembert'
    axios
    .get(`https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${codebarre}`)
    .then((response) => response.data)
    .then((data) => {
    setProduct(data.product)
    console.log(data.product)
    })
    }
  

    return (
        <article className="searchBar">
            <input 
            type="text" 
            name="searchBar" 
            id="searchBar" 
            placeholder="Rechercher" 
            onChange={handleSearchTerm}
            />
        <button 
          className="searchButton"
          type="button"
          onClick = {getOpenFoodFact}
          >
        </button>
        </article>

    )
}

export default Search;
