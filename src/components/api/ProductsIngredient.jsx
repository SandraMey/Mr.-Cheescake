import React from 'react'

function ProductsIngredient({product}) {
    return (
        <div className='alimentation'>
            <table>
            <div className="title">
                <h1>Caractéristique produit</h1>
            </div>
                <p> Ingredients : {product.ingredients_text_with_allergens} </p>
                <p> Traces éventuelles : </p>
                <p> Allergènes : {product.ingredients.allergens} </p>
                <p> Informations nutritionnelles : </p>
            </table>
      </div>
    )
}

export default ProductsIngredient
