import React from 'react';
import "./AboutMe.css";
import Avatoon from "../../assets/Avatoon bijgewerkt.jpg";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button";
import { SlEmotsmile } from "react-icons/sl";


function AboutMe() {
        const navigate = useNavigate();

    return (
        <div className="page--flex">

            <div className="left-side side__50">
                <h1>Over mij</h1>
               <p>Sinds kort ben ik full stack developer en mag ik happy coden, zoals ze dat zo mooi zeggen. De hele dag puzzeltjes oplossen, heerlijk. Ik ben super leergierig en heb dan ook een ongebruikelijke carriere achter de rug. Hiervoor heb ik 13 jaar als klinisch verloskundige gewerkt (niets is zo mooi als een nieuw leven op de wereld zetten) en daarvoor als civiel technisch beleidsmedewerker bij een waterleidingbedrijf. Je snapt het al, ik hou van leren, lezen, nadenken, puzzelen en coding.</p>
                <p>In mijn vrij tijd wandel ik graag alleen door de natuur. Ik kom regelmatig in het Koningshof, wat 10 minuutjes bij mij vandaan is op de fiets. Heerlijk al die bossen, duinen en zee in de buurt. Ik kan er mijn hoofd legen en lekker genieten van de rust, van de vogel- en wind-door-de-bladerengeluiden.</p>
                <p>Daarnaast ben ik druk met wildplukken. Ik doe een opleiding bij <a href='https://www.natuurkok.nl' target="_blank" rel="noreferrer"> de natuurkok</a>, waar ik planten leer herkennen en leer wat te oogsten en hoe klaar te maken. Op vuur natuurlijk, of met de dutch oven. Ik vind het geweldig om tijdens die weekenden te kamperen onder m'n tarp (alhoewel soms ook afzien), dichtbij buiten, in sync met de seizoenen en met mooie gesprekken rondom het houtvuur.</p>
                {/*<Button*/}
                {/*    type="button"*/}
                {/*    onClick={() => navigate("/cv")}>*/}
                {/*    Mijn CV*/}
                {/*</Button>*/}

                <ul className="margin-top1">
                    <li>Ik hou van puzzeltjes oplossen</li>
                    <li>Ik hou van water (drinkwater, vruchtwater,...)</li>
                    <li>Ik hou van samen / -zijn / -werken</li>
                    <li>Ik hou van buiten zijn (maar doe dat nog steeds veel te weinig)</li>
                </ul>
            </div>

            <div className="right-side side__30">
                <img src={Avatoon} className="photo" alt="avatar Ellen van Duikeren"/>
                <p className="photo-caption">It's me (ik kon alleen geen groen-blauw-grijze ogen kiezen, jammer)</p>
            </div>

        </div>
    )
        ;
}

export default AboutMe;