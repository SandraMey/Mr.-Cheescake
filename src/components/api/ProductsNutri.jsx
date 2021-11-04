import React from 'react'

export default function ProductsNutri({product}) {
    return (
        <div className='niveaunutritif' > 
            <div className="title">
            <h1>Elements nutritionnelles</h1>
            </div>
            <p> Niveau gras: {product.nutrient_levels.fat} </p> 
            <p> Niveau sel: {product.nutrient_levels.salt} </p> 
            <p> Niveau sucre: {product.nutrient_levels.sugars} </p> 
            <p> Nutriscore : </p>
            <p> Groupe Nova : {product.nova_group} </p>
            <p> Labels : </p>
      </div>
    )
}
