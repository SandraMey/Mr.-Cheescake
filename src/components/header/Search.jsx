import React from 'react';
import { useState } from "react";
import "./Search.css";
import axios from 'axios';


function Search() {
    
    const [searchTerm, setSearchTerm] = useState('soda');
    const [product, setProduct] = useState('')

    const handleSearchTerm = (e) => {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
    };

    const getOpenFoodFact = () => {
    // Send the request 
    const keyword = "soda"
    axios
    .get(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${keyword}&json=true`)
    .then((response) => response.data)
    .then((data) => {
    setProduct(data.product)
    })
    }
  

    return (
        <div>
        <form action="" onSubmit={getOpenFoodFact}>
            <input 
            type="text" 
            name="searchBar" 
            id="searchBar" 
            placeholder="Rechercher" 
            onChange={handleSearchTerm} value={searchTerm}/>
        <button className="searchButton" type="button"> </button>
        </form>
        <input/>
        </div>
    )
}

export default Search;
