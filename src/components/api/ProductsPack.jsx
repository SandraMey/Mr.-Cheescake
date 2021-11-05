import React from 'react'
import "./productsPack.css";

export default function ProductsPack({product}) {
    
    return (
        <article className='products-pack' > 
            <table>
                <caption>Impact environnemental</caption>
                <tr>
                    <th className="caract">Packaging:</th>
                    <td className="td1-3">{product.packaging}</td>
                </tr>
                <tr>
                    <th className="caract">Ecoscore:</th>
                    <td className="td2-4">{product.ecoscore_grade} </td>
                </tr>
                <tr>
                    <th className="caract">Labels : </th>
                    <td className="td1-3">{product.labels}</td>
                </tr>
                <tr>
                    <th className="caract">Ingredients provenant de l'huile de palme : </th>
                    <td className="td2-4">{product.ingredients_that_may_be_from_palm_oil_n}</td>
                </tr>
            </table>
        </article>
    )
}


