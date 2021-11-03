import React from 'react';
import Alternatives from "../alternatives/Alternatives";
import "./DisplayCode.css"


function DisplayCode({product}) {
  
  return (
    product && (
      <div>
        <article className='DisplayCode'> 
          <p className='imageProduit'> Intégrer image </p>

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

          <div className='alimentation'>
            <div className="title">
            <h1>Caractéristique produit</h1>
            </div>
            <p> Ingredients : {product.ingredients_text_with_allergens} </p>
            <p> Traces éventuelles : </p>
            <p> Allergènes : {product.ingredients.allergens} </p>
            <p> Informations nutritionnelles : </p>
          </div>
          
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
          <div className='proximite' >
            <div className="title">
              <h1>Score</h1>
            </div>
            <p> Eco score : {product.ecoscore_grade} </p>
            <p> Magasin : {product.stores} </p>
          </div> 
          <div>
            <Alternatives/>
          </div>

        </article>        
      </div>
    )
  );
}

export default DisplayCode;