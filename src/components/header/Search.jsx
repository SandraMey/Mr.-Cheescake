import React from 'react';
import { useState, useEffect } from "react";
import "./Search.css";
import axios from 'axios';


function Search(props) {
    const [products, setProducts] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermF, setSearchTermF] = useState('');
    
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchTermF(searchTerm)
        props.onSubmit(products)
    }

    const getOpenFoodFact = async () => {
        // Send the request 
        const url =`https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${searchTerm}&json=true`
        const response = await axios(url);
        setProducts(response.data)
        console.log(response.data)
        }

        useEffect(() => {
            getOpenFoodFact();
          }, [searchTermF]);

    return (
        <div>
        <form className="searchBar"action="" onSubmit={handleSubmit} >
            <input 
            type="text" 
            name="searchBar" 
            id="searchBar" 
            placeholder="Rechercher" 
            onChange={handleSearchTerm} value={searchTerm}/>
        <button className="searchButton" > </button>
        </form>
        </div>
    )
}

export default Search;
