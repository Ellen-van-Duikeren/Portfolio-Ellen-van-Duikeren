import React from 'react';
import "./Homepage.css";
import UitkijkpuntNorway from "../../assets/UitkijkpuntNorway.jpg";

function Homepage() {
    return (
        <div className="page--flex">
            <div className="left-side side__40">
                <img src={UitkijkpuntNorway} className="photo"/>
                <p className="photo-caption">Stegastein, Noorwegen, 2022</p>
            </div>

            <div class="page right-side side__40">
                <h1>Hoi, ik ben <span>Ellen van Duikeren</span></h1>
                <h1>Ik ben een junior Fullstack Developer</h1>
                <p>Zoals je kunt zien op deze website:</p>
                <ul>
                    <li>ben ik op zoek naar werk</li>
                    <li>hoort happy coding bij mij (ik kwam er alleen wat laat achter)</li>
                    <li>hou ik van geometrische patronen</li>
                    <li>hou ik van kleur bekennen</li>
                    <li>ben ik zeer leergierig</li>
                    <li>hou ik van verdwalen, reizen en avontuur</li>
                </ul>
            </div>
        </div>
    );
}

export default Homepage;