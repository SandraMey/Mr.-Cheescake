import React from 'react'
import "./ProductsNutri.css"


export default function ProductsNutri({product}) {


    return (
        <article className='nutrition' > 
            <table>
                <caption>Informations nutritionnelles</caption>
                <tr>
                    <th className="caract">Matières grasses: </th>
                    <td className="td1-3">{product.nutriments.fat_100g} gr</td>
                </tr>
                <tr>
                    <th className="caract">Sel: </th>
                    <td className="td2-4">{product.nutriments.salt_100g} gr</td>
                </tr>
                <tr>
                    <th className="caract">Sucre: </th>
                    <td className="td1-3">{product.nutriments.sugars_100g} gr</td>
                </tr>
                <tr>
                    <th className="caract">Taille de la portion : </th>
                    <td className="td2-4">{product.serving_size}</td>
                </tr>
                <tr>
                    <th className="caract">Groupe Nova : </th>
                    <td className="td1-3"><img className='nova-groupe' src={"https://fr.openfoodfacts.org/images/attributes/nova-group-" + product.nova_group + ".svg"} alt={''} /></td>         
                </tr>
                <tr>
                    <th className="caract">Nutriscore : </th>
                    <td className="td2-4"><img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + product.nutrition_grade_fr + ".svg"} alt={''} /> </td>
                    
                </tr>
            </table>
      </article>
    )
}