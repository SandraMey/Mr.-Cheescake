import React from 'react';
import ProductsPack from "./ProductsPack"
import ProductsProxi from './ProductsProxi';
import "./DisplayCode.css"


function DisplayCode({product}) {
  return (
    product && (
      <div>
        <article className='DisplayCode'> 
          
          <ProductsPack product={product} />
          <ProductsProxi product={product} />

        </article>        
      </div>
    )
  );
}

export default DisplayCode;