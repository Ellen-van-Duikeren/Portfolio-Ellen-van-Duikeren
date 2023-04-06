import React from 'react';
import "./AboutMe.css";
import WaterfallNorway from "../../assets/WaterfallNorway.jpg";

function AboutMe() {
    return (
        <div class="page--flex">

            <div className="left-side">
                <h1>Over mij</h1>
                <p>Coderen doe ik al van jongs af aan; al voor het digitale tijdperk :). Mijn brede interesse, mijn
                    creativiteit, mijn analytische inslag, hebben allemaal bijgedragen tot mijn huidige carrière als
                    fullstack developer. Mijn bijzondere werkgeschiedenis toont mijn flexibiliteit aan, mijn
                    leergierigheid.
                    Ik kan daardoor ook makkelijk verbanden leggen met andere vakgebieden.</p>
                <p>Ik krijg veel energie van het schrijven en bewerken van code, van het oplossen van al die kleine
                    puzzels,
                    van het creatieve proces. Ik ben positief, heb een mentaliteit van: we doen het en we doen het
                    samen.
                    Daarnaast zet ik mij graag in voor een duurzame samenleving.</p>
                <p>Programma's: HTML/CSS, Javascript, React, Wordpress, Java, Spring Boot, Maven, Postman, PostgreSQL,
                    IntelliJ, WebStorm, Github, Visual paradigm, Figma.</p>
            </div>

            <div className="right-side">
                <img src={WaterfallNorway} className="photo"/>
                <p className="photo-caption">Waterval (geen idee meer welke van de vele), Noorwegen, 2022</p>
                <ul>
                    <li>Ik hou van water (watervalwater, drinkwater, vruchtwater,...)</li>
                    <li>Ik hou van structuur</li>
                    <li>Ik hou van samenwerken</li>
                    <li>Ik hou van buiten zijn (maar doe dat veel te weinig)</li>
                </ul>
            </div>

        </div>
    )
        ;
}

export default AboutMe;