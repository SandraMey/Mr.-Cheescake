import React, {useState} from 'react';
import "./ProductsInfos.css";


function ProductsInfosBack( {product}) {

    const [isFav, setIsFav] = React.useState(false);

    function handleClickFav() {
    setIsFav(!isFav);
    }

    return (
        <div className = "back">
 
               <img className="imgproducts" src={product.image_url}></img>
            <div className="nameProduct">
                <h1>{product.product_name_fr} </h1>
            </div>
            <div className="detailProducts">
                <p className="details"><u>Code barre </u>:  {product.code}</p>
                <p className="details"><u>Marque </u>: {product.brands}</p>
                <p className="details"><u>Quantité</u>: {product.quantity}</p>
            </div>    
        </div>
    );
}

export default ProductsInfosBack;