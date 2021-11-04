import React from 'react'
import "./productsPack.css";

export default function ProductsPack({product}) {
    
    return (
        <div className='products-pack' > 
            <div className="card">
            <h1 className="title">Impact environnemental</h1>

            <p> Packaging: {product.packaging} </p> 
            <p> Ecoscore: {product.ecoscore_grade} </p> 
            <p> Labels : {product.labels}</p>
            <p> Ingredients provenant de l'huile de palme : {product.ingredients_that_may_be_from_palm_oil_n}</p>
            </div>
      </div>
    )
}
