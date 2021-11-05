import React from 'react';
import Alternatives from "./Alternatives";
import ProductsInfos from './ProductsInfos';
import ProductsIngredient from './ProductsIngredient';
import ProductsNutri from './ProductsNutri';
import ProductsPack from "./ProductsPack"
import ProductsProxi from './ProductsProxi';
import "./DisplayCode.css"



function DisplayCode({product}) {
  return (
    product && (
      <div>
        <article className='DisplayCode'> 
        <div>
            <ProductsInfos product={product}/>
          </div>
          <div>
            <ProductsIngredient product={product} />
          </div>
          <div>
            <ProductsNutri  product={product}/>
          </div>
          <div>
            <ProductsProxi product={product}/>
          </div>
          <div>
            <Alternatives/>
          </div>
          <ProductsPack product={product} />
          <ProductsProxi product={product} />


        </article>        
      </div>
    )
  );
}

export default DisplayCode;