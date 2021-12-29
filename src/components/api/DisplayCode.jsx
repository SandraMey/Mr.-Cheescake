import React from 'react';
import Alternatives from "./Alternatives";
import ProductsInfos from './ProductInfos/ProductsInfos';
import ProductsIngredient from './ProductsIngredient/ProductsIngredient';
import ProductsNutri from './ProductsNutri/ProductsNutri';
import ProductsPack from "./ProductsPack/ProductsPack"
import ProductsProxi from './Proxi/ProductsProxi';
import "./DisplayCode.css"



function DisplayCode({product}) {
  return (
    product && (
      <main>
        <section className='DisplayCode'> 
          <ProductsInfos product={product}/>
          <ProductsIngredient product={product} />
          <ProductsNutri  product={product}/>
          <Alternatives/>
          <ProductsPack product={product} />
          <ProductsProxi product={product} />
        </section>        
      </main>
    )
  );
}

export default DisplayCode;