import React from 'react'
import "./productsPack.css";

export default function ProductsPackBack({product}) {
    
    return (
        <article className='products-pack' > 
            <table>
                <caption>Impact environnemental</caption>
                <tr>
                    <th className="caract">Packaging:</th>
                    <td className="td1-3">{product.packaging_text}</td>
                </tr>
                <tr>
                    <th className="caract">Ecoscore:</th>
                    <td className="td2-4"><img className='ecoscore' src={"https://fr.openfoodfacts.org/images/attributes/ecoscore-" + product.ecoscore_grade + ".svg"} alt={''} /></td>
                </tr>
                <tr>
                    <th className="caract">Labels : </th>
                    <td className="td1-3">{product.labels_old}</td>
                </tr>
                <tr>
                    <th className="caract">Ingredients provenant de l'huile de palme : </th>
                    <td className="td2-4">{product.ingredients_that_may_be_from_palm_oil_n}</td>
                </tr>
            </table>
        </article>
    )
}
