import React, {useState} from 'react';
import "./ProductsInfos.css";

function ProductsInfos( {product}) {

    const [isFavorite, setIsFavorite] = useState(false);

    function handleClickFavorite() {
    setIsFavorite(!isFavorite);
    }

    return (
        <article className='InfoPrincipales'>
               <img className="imgproducts" src={product.image_url}></img>
            <div className="nameProduct">
                <h1>{product.product_name} </h1>
            </div>
            <div className="detailProducts">
                <p><u>Code barre </u>:  {product.code}</p>
                <p><u>Marque </u>: {product.brands_tags}</p>
                <p><u>Ajouter aux favoris </u>: </p>
            </div>
            <div
                onClick={handleClickFavorite}
                className={isFavorite ? "isFavorite" : "notFavorite"}>  
            </div>
        </article>
    );
}

export default ProductsInfos;
