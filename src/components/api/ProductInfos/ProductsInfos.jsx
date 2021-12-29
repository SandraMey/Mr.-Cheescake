import React,  {useState} from 'react';
import "./ProductsInfos.css";
import ProductsInfosFront from './ProductsInfosFront';
import ProductsInfosBack from './ProductsInfosBack';


function ProductsInfos( {product} ) {

  const [ isFlipPro, setIsFlipPro ] = useState(false);


  const handleFlip = () => {
    setIsFlipPro(!isFlipPro)
  }

    return (

        <div onClick={handleFlip}  className={`card ${isFlipPro ? 'flip' : ''}`}> 
      {isFlipPro ? 
      <ProductsInfosBack product={product} />
      :
      <ProductsInfosFront />
    }   
     
     
     
     </div>

    );
}

export default ProductsInfos;
