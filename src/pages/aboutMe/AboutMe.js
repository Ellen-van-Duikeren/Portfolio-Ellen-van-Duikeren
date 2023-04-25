import React from 'react';
import "./AboutMe.css";
import AvatarEllen from "../../assets/AvatarEllen.jpg";
import {IoIosBicycle} from "react-icons/io";

function AboutMe() {

    return (
        <>
            <div className="page--flex">
                <div className="left-side side__50">
                    <h1>Over mij</h1>
                    <h3>Carrière</h3>
                    <p className="margin-bottom1">Sinds maart 2023 ben ik full stack developer en mag ik happy
                        coden. De
                        hele dag puzzeltjes oplossen, heerlijk. Ik ben super leergierig en heb dan ook een
                        ongebruikelijke carrière achter de rug. Voordat ik full stack developer werd, heb ik 13 jaar
                        als
                        klinisch verloskundige gewerkt (niets is zo mooi als een nieuw leven op de wereld zetten) en
                        daarvoor als civiel technisch beleidsmedewerker bij een waterleidingbedrijf. Je snapt het
                        al, ik
                        hou van leren, lezen, nadenken, puzzelen en coding.</p>

                    <h3>Natuur</h3>
                    <p className="margin-bottom1">In mijn vrij tijd wandel ik graag door de natuur. Ik kom
                        regelmatig in
                        het Koningshof, wat 10 <IoIosBicycle/> minuutjes bij mij vandaan is. Heerlijk al die bossen,
                        duinen en zee in de buurt. Ik kan er mijn hoofd legen en lekker genieten van de rust, van de
                        vogel- en wind-door-de-bladerengeluiden.</p>

                    <h3>Wildplukken</h3>
                    <p className="margin-bottom1">Daarnaast ben ik druk met wildplukken. Ik doe een opleiding bij
                        de <a
                            href='https://www.natuurkok.nl' target="_blank" rel="noreferrer">natuurkok</a>, waar ik
                        planten
                        leer herkennen en leer wat te oogsten en hoe klaar te maken. Op vuur natuurlijk, of met de
                        dutch
                        oven. Ik vind het geweldig om tijdens die weekenden te slapen onder m'n tarp (alhoewel soms
                        ook
                        afzien), dichtbij buiten, in sync met de seizoenen en met mooie gesprekken rondom het
                        houtvuur.
                    </p>

                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    onClick={() => navigate("/cv")}>*/}
                    {/*    Mijn CV*/}
                    {/*</button>*/}

                    <ul className="margin-top1">
                        <li>Ik hou van puzzeltjes oplossen</li>
                        <li>Ik hou van water (drinkwater, vruchtwater, regenwater,...)</li>
                        <li>Ik hou van samen / -zijn / -werken</li>
                        <li>Maar ik hou zeker ook van alleen zijn</li>
                        <li>Ik hou van buiten zijn (maar doe dat nog steeds veel te weinig)</li>
                    </ul>
                </div>

                <div className="right-side side__30">
                    <img src={AvatarEllen} className="photo avatar" alt="avatar Ellen van Duikeren"/>
                    <p className="photo-caption">It's me (ik kon alleen geen groen-blauw-grijze ogen kiezen,
                        jammer)</p>
                </div>
            </div>
        </>)
        ;
}

export default AboutMe;