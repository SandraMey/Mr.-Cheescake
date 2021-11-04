import React from 'react';
import { useState, useEffect } from "react";
import "./Search.css";
import axios from 'axios';


function Search() {
    const [searchTerm, setSearchTerm] = useState('soda');
    const [product, setProduct] = useState('')

    const handleSearchTerm = (e) => {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
        
    };

    const getOpenFoodFact = async () => {
        // Send the request 
        await axios
        .get(`https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${searchTerm}&json=true`)
        .then((response) => response.data)
        .then((data) => {
        setProduct(data.products)
                console.log(product);      
        })       
        }

        useEffect(() => {
            getOpenFoodFact();
          }, [searchTerm]);

    return (
        <div>
        <form className="searchBar"action="" onClick={getOpenFoodFact} >
            <input 
            type="text" 
            name="searchBar" 
            id="searchBar" 
            placeholder="Rechercher" 
            onChange={handleSearchTerm} value={searchTerm}/>
        <button className="searchButton" type="button" > </button>
        </form>
        </div>
    )
}

export default Search;
