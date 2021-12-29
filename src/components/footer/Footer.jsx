
import React from 'react'
import Cheesecake from "../../assets/Cheesecake.jpg";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <article className="logofooter">
                <img className="imgfooter"src={Cheesecake}></img>
            </article>
            <article className="lien">
            <a className="lienstyle" href="/Contact">Contact -</a>
            <a className="lienstyle" href=""> Mentions légales -</a>
            <a className="lienstyle" href=""> CGU -</a>
            <a className="lienstyle" href=""> Cookies </a>
          </article>
            <article className="reseaux">
                <a href="http://www.facebook.com"><img className="icon" src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook"/></a>
               <a href="http://www.instagram.com"><img className="icon" src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram"/></a> 
               <a href="http://youtube.com"><img className="icon" src="https://img.icons8.com/fluency/48/000000/youtube-play.png" alt="youtube"/> </a> 
            </article>
        </footer>
    )
}

export default Footer


