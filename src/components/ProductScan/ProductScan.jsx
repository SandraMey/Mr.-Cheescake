import React from "react";
import {Helmet} from 'react-helmet';

import DisplayCode from "../api/DisplayCode";
import DisplayScan from "../Scan/DisplayScan";
import "../Scan/display.css"

const ProductScan = ({setProduct, product}) => {



 const reloader = () => {
  window.location.reload()
 }

  return (


    <main className="productScan">
      <Helmet>
        <title>Scanner</title>
        </Helmet>
      {product === ""
      ? <DisplayScan product={product}  setProduct={setProduct}/>
      :
      
      <DisplayCode product={product}  setProduct={setProduct}/>
      }
      
    </main>
  );
};

export default ProductScan;


//<button className="buttonmenu" onClick={window.location.reload()}>Je scanne un autre produit</button>,