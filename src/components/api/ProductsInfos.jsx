import React from 'react';
import "./ProductsInfos.css";

function ProductsInfos() {
    return (
        <div className='InfoPrincipales'>
            <div className="title">
                <h1>{product.product_name} </h1>
            </div>
            <p> Code barre : {product.code} </p>
            <p> Marque : {product.brands_tags} </p>
            <p> Quantité : {product.serving_size} </p>
            <p> Packaging : {product.packaging} </p>
            <p> Lieu de production : {product.countries} </p>
        </div>
    )
}

export default ProductsInfos
