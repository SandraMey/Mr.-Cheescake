import React from 'react'

function ProductsIngredient() {
    return (
        <div className='alimentation'>
            <div className="title">
                <h1>Caractéristique produit</h1>
            </div>
                <p> Ingredients : {product.ingredients_text_with_allergens} </p>
                <p> Traces éventuelles : </p>
                <p> Allergènes : {product.ingredients.allergens} </p>
                <p> Informations nutritionnelles : </p>
      </div>
    )
}

export default ProductsIngredient
