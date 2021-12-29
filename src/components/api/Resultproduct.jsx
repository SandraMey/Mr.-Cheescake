import React, { useEffect, useState } from 'react';
import "./Resultproduct.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import {useParams} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import {Helmet} from 'react-helmet';


function Resultproduct() {

    const [ searchResults, setSearchResults ] = useState([]);


    const { searchTerm } = useParams();

    const getOpenFoodFact = async () => {
        // Send the request 
        const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${ searchTerm }&json=true`
        const response = await axios(url);
       setSearchResults(response.data.products);
    }

    useEffect(() => {
        getOpenFoodFact()
    }, [searchTerm])



    return (
            <main className="slider">
                <section className="sliderside">

                    <Helmet>
                        <title>Résultats</title>
                    </Helmet>

                <div className="productName">
                    <h1>{searchTerm}</h1>
                </div>

            <Carousel 
              autoPlay
              interval={6000} 
              infiniteLoop
              centerMode
              >
                {
                searchResults.filter((product) => (product._id.length === 13) && product.countries.includes('France')).slice(0, 10).map(slide => (
                    <div key={slide._id}>
                        <img className="imgslide"   src={slide.image_url} />
                        <div className="overlay">
                        <a href={`/ProductId/${slide._id}`}> <h2 className="overlay__title">{slide.product_name}</h2>
                              </a> 
                        </div>
                    </div>
                ))}
            </Carousel>
            </section>
            </main>

    )
}


export default withRouter(Resultproduct);