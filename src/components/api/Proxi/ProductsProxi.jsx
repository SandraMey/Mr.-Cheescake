
import React from "react";
import "./productsProxi.css";

export default function ProductsProxi({ product }) {
console.log(product);
  let lat = "";
  let lon = "";
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  });

  const handleClick = () => {
    window.open(
      `https://www.google.fr/maps/search/${product.stores}/@${lat},${lon},13z`
    );
  };


  return (
    <article className="products-proxi">

        <h1 className="title">Où acheter</h1>

        <p> <u>Magasins:</u> {product.stores} </p>

        <button className="map-button" onClick={handleClick}>
          Près de chez vous
        </button>
    </article>
  );
}
