import React from 'react'
import "./ProductsIngredient.css";

function ProductsIngredient({product}) {
    return (
        <div className='alimentation'>
            <table>
                <caption>Caractéristique produit</caption>
                <tr>
                    <th className="caract">Ingredients :</th>
                    <td className="td1-3">{product.ingredients_text_with_allergens}</td>
                </tr>
                <tr>
                    <th className="caract">Traces éventuelles : </th>
                    <td className="td2-4">{product.traces}</td>
                </tr>
                <tr>
                    <th className="caract">Allergènes : </th>
                    <td className="td1-3">{product.allergens}</td>
                </tr>
                <tr>
                    <th className="caract">Catégories : </th>
                    <td className="td2-4">{product.categories}</td>
                </tr>
            </table>
      </div>
    )
}

export default ProductsIngredient
