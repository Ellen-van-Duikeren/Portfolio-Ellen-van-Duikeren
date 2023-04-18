import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";

function BlogRain() {
    return (
        <BlogComp
            date="18 april 2023"
            title="Let it rain"
            p1="Eindelijk tijd voor een animatie. Deze animatie staat al vanaf het begin op mijn lijstje: ik wil het laten regenen op de pagina. Ik had hier een hele goede tutorial voor op youtube. Ik had uiteraard nog wat extra issues, omdat ik de code niet in mijn app.js wilde hebben, maar in een eigen component. En natuurlijk wilde ik de hoogte waarover de druppels vallen, anders hebben. Bij mij vallen de druppels nu voor de nav langs en tot op de footer."
            p2="Ik heb voor het eerst met styled components gewerkt. Deze moet je eerst installeren met 'npm add styled-components' en dan kan je in je js de styling zetten van je div. Ik zie nog niet helemaal wat hier het voordeel van is, behalve dat je geen aparte css hoeft te maken en te koppelen en ik heb nu dus beide: en styled components en aparte gekoppelde css files. Mss dat ik dit nog eens ga aanpassen."
            p3="Om ervoor te zorgen dat de druppels niet allemaal op hetzelfde tijdstip beginnen te vallen, maak ik gebruik van setInterval. Deze moet je weer eerst installeren met 'npm add react-use'. Aan je useInterval geef je dan een emoji mee (in dit geval een druppel) en een offset mee, wat het aantal pixels naar rechts is op het scherm van waar de druppel gaat vallen. Maar zolas ik al schreef, bekijk het filmpje."

            href1="https://www.youtube.com/watch?v=RYv-CgDJOi8"
            linkName1="How to make it Rain with CSS Animation, React, & Styled Components"
            href2="https://emojipedia.org/droplet/"
            linkName2="Emojipedia"
            t1="animations"
            t2="useState"
            t3="useInterval"
            t4="styled.div"
        />
    );
}

export default BlogRain;