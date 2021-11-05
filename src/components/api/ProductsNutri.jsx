import React from 'react'
import "./ProductsNutri.css"

export default function ProductsNutri({product}) {
    return (
        <article className='nutrition' > 
            <table>
                <caption>Elements nutritionnelles</caption>
                <tr>
                    <th className="caract">Niveau gras:</th>
                    <td className="td1-3">{product.nutrient_levels.fat}</td>
                </tr>
                <tr>
                    <th className="caract">Niveau sel: </th>
                    <td className="td2-4">{product.nutrient_levels.salt}</td>
                </tr>
                <tr>
                    <th className="caract">Niveau sucre: </th>
                    <td className="td1-3">{product.nutrient_levels.sugars}</td>
                </tr>
                <tr>
                    <th className="caract">Groupe Nova : </th>
                    <td className="td2-4">{product.nova_group}</td>
                </tr>
                <tr>
                    <th className="caract">Nutriscore :</th>
                    <td className="td1-3">{product.nutrient_levels.fat}</td>
                </tr>
                <tr>
                    <th className="caract">Labels :</th>
                    <td className="td2-4">{product.nutrient_levels.fat}</td>
                </tr>
            </table>
      </article>
    )
}



