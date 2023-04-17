import React from 'react';
import "./Contact.css";
import BeachPortugal from "../../assets/BeachPortugal.jpg";
import {IoIosPerson} from "react-icons/io" ;
import {GoLocation} from "react-icons/go" ;
import {CiLinkedin} from "react-icons/ci" ;
import {AiFillGithub} from "react-icons/ai" ;

function Contact() {
    return (
        <div className="page--flex">

            <div className="left-side side__45 block__orange photo--no-show">
                <img src={BeachPortugal} alt="Strand, Espinho, Portugal" className="photo"/>
                <p className="photo-caption">Strand, Espinho, Portugal, 2022</p>
            </div>

            <div className="right-side side__45">
                <h1>Contact</h1>
                <ul className="ul--no-point">
                    {/*<p>Zoek je een enthousiaste fullstack developer, neem dan contact met mij op:</p>*/}
                    <li><IoIosPerson/> Ellen van Duikeren</li>
                    <li><GoLocation/> Woonplaats: Haarlem</li>
                    <li>✉ e.vanduikeren@gmail.com</li>
                    <li><CiLinkedin/> https://www.linkedin.com/in/ellen-van-duikeren/</li>
                    <li><AiFillGithub/> https://github.com/Ellen-van-Duikeren</li>
                </ul>
            </div>
        </div>

    );
}

export default Contact;