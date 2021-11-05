import React, {useState} from 'react';
import "./alternatives.css";

function Alternatives (props, product){

    const [isFavorite, setIsFavorite] = useState(props.isFavorite);

function handleClickFavorite() {
  setIsFavorite(!isFavorite);
}
    return (
            <article className="alternative">
                <div>
                    <h1 className="text-center">Recommandation</h1>
                </div>
                <div className="info-product">
                    <p>{product.product_name}</p>
                    <p>Code barre : {product.code}</p>
                    <p>NutriScore : </p>
                </div>
                <div 
                id="favorite"
                className={isFavorite ? "isFavorite" : "notFavorite"}
                onClick={handleClickFavorite}
                >
                </div> 
                <div className="product-btn">
                    <button type="button">Voir fiche Produit</button>
                </div>
            </article>

    );
}

export default Alternatives;