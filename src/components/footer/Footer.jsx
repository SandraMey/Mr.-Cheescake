
import React from 'react'
import Cheesecake from "../../assets/Cheesecake.jpg";
import "./Footer.css";

function Footer() {
    return (
        <section class="footer">
            <article className="logofooter">
                <img className="imgfooter"src={Cheesecake}></img>
            </article>
            <article class="lien">
            <a class="lienstyle" href="html/contact.html">Contact -</a>
            <a class="lienstyle" href=""> Mentions légales -</a>
            <a class="lienstyle" href=""> CGU -</a>
            <a class="lienstyle" href=""> Cookies </a>
          </article>
            <article class="reseaux">
                <img class="icon" src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook"/>
                <img class="icon" src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram"/>
                <img class="icon" src="https://img.icons8.com/fluency/48/000000/youtube-play.png" alt="youtube"/>
            </article>
        </section>
    )
}

export default Footer

