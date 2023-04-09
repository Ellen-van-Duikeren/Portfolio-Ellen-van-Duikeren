import React from 'react';
import "./Contact.css";
import BeachPortugal from "../../assets/BeachPortugal.jpg";

function Contact() {
    return (
        <div className="page, page--flex">
            <div className="left-side side__40 block__orange">
                <img src={BeachPortugal} alt="Strand, Espinho, Portugal" className="photo"/>
                <p className="photo-caption">Strand, Espinho, Portugal, 2022</p>
            </div>

            <div className="right-side side__40">
                <h1>Contact</h1>
                <ul>
                    <p>Zoek je een enthousiaste fullstack developer, neem dan contact met mij op:</p>
                    <li>Ellen van Duikeren</li>
                    <li>Woonplaats: Haarlem</li>
                    <li>✉ e.vanduikeren@gmail.com</li>
                    <li>https://www.linkedin.com/in/ellen-van-duikeren/</li>
                    <li>https://github.com/Ellen-van-Duikeren</li>
                </ul>
            </div>
        </div>

    );
}

export default Contact;