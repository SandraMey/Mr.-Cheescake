import React, {useState} from 'react';
import "./productsProxi.css";
import ProductsProxiBack from './ProductsProxiBack';
import ProductProxiFront from './ProductProxiFront';

function ProductProxi( {product} ) {

  const [ isFlipPro, setIsFlipPro ] = useState(false);


  const handleFlip = () => {
    setIsFlipPro(!isFlipPro)
  }
  
    return (

        <div onClick={handleFlip}  className={`card ${isFlipPro ? 'flip' : ''}`}> 
      {isFlipPro ? 
      <ProductsProxiBack product={product} />
      :
      <ProductProxiFront />
    }   
     
     </div>

    );
}

export default ProductProxi;
