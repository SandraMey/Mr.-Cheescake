import React, {useState} from 'react';
import "./alternatives.css";
import AlternativesFront from './AlternativesFront';
import AlternativesBack from './AlternativesBack';


function Alternatives( {product} ) {
  const [ isFlipAlt, setIsFlipAlt ] = useState(false);


  const handleFlip = () => {
    setIsFlipAlt(!isFlipAlt)
  }

    return (

        <div onClick={handleFlip}  className={`card ${isFlipAlt ? 'flip' : ''}`}> 
      {isFlipAlt ? 
      <AlternativesBack product={product} />
      :
      <AlternativesFront />
    }   
     
     </div>

    );
}

export default Alternatives;
