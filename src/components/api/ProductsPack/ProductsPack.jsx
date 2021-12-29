import React, {useState} from 'react';
import "./productsPack.css";
import ProductsPackFront from './ProductsPackFront';
import ProductsPackBack from './ProductsPackBack';


function ProductsPack ( {product} ) {
  const [ isFlipPac, setIsFlipPac ] = useState(false);


  const handleFlip = () => {
    setIsFlipPac(!isFlipPac)
  }

    return (

        <div onClick={handleFlip}  className={`card ${isFlipPac ? 'flip' : ''}`}> 
      {isFlipPac ? 
      <ProductsPackBack product={product} />
      :
      <ProductsPackFront />
    }   
     
     
     
     </div>

    );
}

export default ProductsPack;
