import React from 'react';
import Alternatives from "./AlternativesAlternatives";
import ProductsInfos from './ProductsInfos';
import ProductsIngredient from './ProductsIngredient';
import ProductsNutri from './ProductsNutri';
import ProductsProxi from './ProductsProxi';
import "./DisplayCode.css"
import ProductsNutri from './ProductsNutri';

function DisplayCode({product}) {
  
  return (
    product && (
      <div>
        <article className='DisplayCode'> 
          <p className='imageProduit'> Intégrer image </p>

          <div>
            <ProductsInfos />
          </div>
          <div>
            <ProductsIngredient />
          </div>
          <div>
            <ProductsNutri />
          </div>
          <div>
            <ProductsProxi/>
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