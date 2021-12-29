
import React from "react";
import "./productsProxi.css";


export default function ProductsProxi({ product }) {

  let lat = "";
  let lon = "";
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  });

  const handleClick = () => {
    console.log(lat, lon);
    product.stores === '' ?
    window.open(
      `https://www.google.fr/maps/search/carrefour/@${lat},${lon},13z`
    ) :
    window.open(
      `https://www.google.fr/maps/search/${product.stores}/@${lat},${lon},13z`
    );
  };


  return (
    <article className="products-proxi">

        <h1 className="title">Où acheter</h1>
        {product.stores === '' ?
        <p className="store"> <u>Magasins:</u> Carrefour</p> :
        <p className="store"> <u>Magasins:</u> {product.stores} </p>
       }
        <div>
        <button className="map-button" onClick={handleClick}>
          Près de chez vous
        </button>
        </div>
    </article>
  );
}