import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";
import ScreenshotStoppingBirds from "../../../assets/ScreenshotStoppingBirds.png";

function BlogStoppingBirds() {
    return (
        <BlogComp
            date="26 april 2023"
            title="Stop those birds"
            toPage="/blog"
            src={ScreenshotStoppingBirds}
            width="70%"
            p1="Jaaaa, het is me gelukt om de vogels te laten vliegen en weer te laten stoppen, of eigenlijk suddenly te laten disappearen. Ook dit had wat voeten in de aarde. Na wat gestoei met animation-play-state waarbij die ene vogel dus op z'n plek bleef vliegen als ik er met de muis op stond (zie blog flying birds), heb ik besloten om dan eindelijk toch maar een context te gaan bouwen. Het lastige bleef namelijk dat de animaties van mijn birds gecodeerd waren in de birds component, maar dat ik vanuit de button in het animatie menu deze wilde kunnen stoppen en aanzetten. Het voordeel van een context is dat het een stukje state is, waar ieder component bij kan."
            p2="In de context heb ik een useState aangemaakt met meerdere key-values. De flying key staat standaard op false. Als je nu op de button let birds fly klikt in het animatie menu, roept deze een functie aan: onClick={letTheBirdsFly}. Deze functie staat weer in de context en als flying true is, dan zet deze functie flying op false en andersom. In app.js render ik de flying birds alleen als flying true is: {flying && <Birds/>}. Als je nu op de knop stop those birds! klikt, dan wordt flying false en verdwijnen de vogels acuut. Ze landen niet elegant op de grond, maar ze storten ook niet neer."
            p3="Tenslotte wilde ik ook dat als je het animatie menu dichtklikte, alle animaties zouden stoppen. Hiervoor heb ik, ook in de context, een functie gemaakt om flying op false te zetten als je op de animatie button klikt om deze te sluiten. Als de vogels aan het vliegen zijn, dan roep ik deze functie aan: flying && stopTheBirdsFlying()."
            p4="OK. Ik vrees dat het allemaal veel simpeler kan, maar voor nu werkt het. Hetzelfde heb ik uitgewerkt voor de regen. Deze kan je nu ook aan en uit schakelen met de knoppen in het animatie menu."
            t1="animation"
            t2="birds"
            t3="stop"
        />
    );
}

export default BlogStoppingBirds;