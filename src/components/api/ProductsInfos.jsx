import React, {useState} from 'react';
import "./ProductsInfos.css";
import Cereales from '../../assets/cereales-vanille-avec-quinoa.jpg'

function ProductsInfos( {product}) {

    const [isFavorite, setIsFavorite] = React.useState(false);

    function handleClickFavorite() {
    setIsFavorite(!isFavorite);
    }

    return (
        <div className='InfoPrincipales'>
               <img className="imgproducts" src={product.image_url}></img>
            <div className="nameProduct">
                <h1>{product.product_name} </h1>
            </div>
            <div className="detailProducts">
            <p> <u>Code barre </u>:  {product.code} </p>
            <p> <u>Marque </u>: {product.brands_tags} </p>
            </div>
            <div className="favo">
            <div
                id="favorite"
                onClick={handleClickFavorite}
                className={isFavorite ? "isFavorite" : "notFavorite"}>  
            </div>
            <p><u>Ajouter aux favoris </u>: </p>
            </div>
            {/*<p> Quantité : {product.serving_size} </p>
            <p> Packaging : {product.packaging} </p>
            <p> Lieu de production : {product.countries} </p>*/}
        </div>
    );
}

export default ProductsInfos;
