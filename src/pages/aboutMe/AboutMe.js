import React from 'react';
import "./AboutMe.css";
import Avatoon from "../../assets/Avatoon bijgewerkt.jpg";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button";
import { SlEmotsmile } from "react-icons/sl";


function AboutMe() {
        const navigate = useNavigate();

    return (
        <div class="page--flex">

            <div className="left-side side__50">
                <h1>Over mij</h1>
                <p>Coderen doe ik al van jongs af aan; al voor het digitale tijdperk <SlEmotsmile />. Mijn brede interesse, mijn
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
                <Button
                    type="button"
                    onClick={() => navigate("/cv")}>
                    Mijn CV
                </Button>

                <ul className="margin-top1">
                    <li>Ik hou van water (drinkwater, vruchtwater,...)</li>
                    <li>Ik hou van structuur</li>
                    <li>Ik hou van samenwerken</li>
                    <li>Ik hou van buiten zijn (maar doe dat veel te weinig)</li>
                </ul>
            </div>

            <div className="right-side side__30">
                <img src={Avatoon} className="photo"/>
                <p className="photo-caption">It's me (ik kon alleen geen groen-blauw-grijze ogen kiezen, jammer)</p>
            </div>

        </div>
    )
        ;
}

export default AboutMe;