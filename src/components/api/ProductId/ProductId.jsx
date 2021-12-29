import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import DisplayCode from "../DisplayCode";
import axios from "axios";
import Helmet from 'react-helmet';


const ProductId = ({setProduct, product}) => {

    const { id } = useParams();

    const getOpenFoodFact = async () => {
        // Send the request
       
       try{ await axios
          .get(`https://fr.openfoodfacts.org/api/v2/product/${id}`)
          .then((response) => response.data)
          .then((data) => {
            setProduct(data.product);
            console.log(data.product);
          });
        } catch {
          alert('Produit non trouvé, faites une nouvelle recherche')
        }
      };

      useEffect(() => {
        getOpenFoodFact()
    }, [])


  return (
    
    <div className="productId">
            <Helmet>
        <title>Produit</title>
        </Helmet>
       { product !== "" ? 
            <DisplayCode product={product} /> :
            <h1>Faites une recherche!</h1>
        }
    </div>
  );
};

export default ProductId;
