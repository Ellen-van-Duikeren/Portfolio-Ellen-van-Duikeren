import React from 'react';
import "./Homepage.css";
import "../../components/button/Button.css"
import UitkijkpuntNorway from "../../assets/UitkijkpuntNorway.jpg";
import {Link} from "react-router-dom";

function Homepage() {

    return (
        <div className="homepage block__orange">
            <div>
                <h1 className="slideLeft">Hoi, ik ben <span>Ellen van Duikeren</span></h1>
                <h1 className="slideLeftRetarded">Ik ben een junior Fullstack Developer</h1>

                <p>Dit portfolio heb ik gemaakt, in de tijd dat ik aan het solliciteren was, om mijn werk te kunnen laten zien. Daarnaast vind ik het geweldig om bezig te zijn met de frontend en om iets te maken dat helemaal <strong>bij mij</strong> past. Tenslotte ga ik het ook gebruiken om dingen uit te proberen; je leest hierover in <Link to="/blog">mijn blog</Link>.</p>

                <p className="margin-top2">Zoals je kunt zien op deze website:</p>
                <ul>
                    {/*<li>ben ik op zoek naar werk</li>*/}
                    <li>hoort happy coding bij mij (ik kwam er alleen wat laat achter)</li>
                    <li>hou ik van geometrische patronen</li>
                    <li>hou ik van kleuren</li>
                    <li>ben ik zeer leergierig</li>
                    <li>hou ik van verdwalen, reizen en avontuur</li>
                </ul>
            </div>

            <div className="photo--no-show margin-top2">
                <img src={UitkijkpuntNorway} className="photo" alt="Stegastein, Noorwegen"/>
                <p className="photo-caption">Stegastein, Noorwegen, 2022</p>
            </div>

            {/*<div className="margin-top2">*/}
            {/*    <p>PS: Als experiment en om meer aan te sluiten bij modernere websites, ben ik ook bezig een one-page-portfolio te maken. </p>*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        className="button button--large margin-top1"*/}
            {/*        onClick={() => navigate("/onePagePortfolio")}*/}
            {/*    >*/}
            {/*        one page portfolio*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
}

export default Homepage;