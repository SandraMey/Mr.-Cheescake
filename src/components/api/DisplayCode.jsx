import React from 'react';
import "./DisplayCode.css"

function DisplayCode({product}) {
  return (
    product && (
      <div>
        <article className='DisplayCode'> 
          <p className='imageProduit'> Intégrer image </p>

          <div className='InfoPrincipales'>
            <h1> {product.product_name} </h1>
            <p> Code barre : {product.code} </p>
            <p> Marque : {product.brands_tags} </p>
            <p> Quantité : {product.serving_size} </p>
            <p> Packaging : {product.packaging} </p>
            <p> Lieu de production : {product.countries} </p>
          </div>

          <div className='alimentation'>
            
            <p> Ingredients : {product.ingredients_text_with_allergens} </p>
            <p> Traces éventuelles : </p>
            <p> Allergènes : {product.ingredients.allergens} </p>
            <p> Informations nutritionnelles : </p>
          </div>
          
          <div className='niveaunutritif' > 
            <p> Niveau gras: {product.nutrient_levels.fat} </p> 
            <p> Niveau sel: {product.nutrient_levels.salt} </p> 
            <p> Niveau sucre: {product.nutrient_levels.sugars} </p> 
            <p> Nutriscore : </p>
            <p> Groupe Nova : {product.nova_group} </p>
            <p> Labels : </p>
          </div>
          <div className='proximite' >
            <p> Eco score : {product.ecoscore_grade} </p>
            <p> Magasin : {product.stores} </p>
          </div> 
        </article>        
      </div>
    )
  );
}

export default DisplayCode;