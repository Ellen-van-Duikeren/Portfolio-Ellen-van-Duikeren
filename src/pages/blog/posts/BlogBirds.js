import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";
import ScreenshotFlyingBird from "../../../assets/ScreenshotFlyingBird.png";

function BlogBirds(props) {
    return (
        <BlogComp
            date="25 april 2023"
            title="Flying birds"
            toPage="portfolio_ellen_van_duikeren/aboutMe"
            src={ScreenshotFlyingBird}
            width="15%"
            p1="En nog een animatie. Aangezien ik zo van de natuur hou, dacht ik dat het leuk was om wat flying birds toe te voegen aan mijn website. Eerst dacht ik nog, oke, gewoon de code kopiëren en het werkt. Maar dat is dus niet zo. Bovendien vind ik daar echt niks aan; ik wil ook snappen wat ik aan het doen ben. Gelukkig viel er nog genoeg te ontdekken en zelf te coderen."
            p2="De uitleg was minimaal. Maar dat geeft niet. Ik ga dan de code, bijna regel voor regel, veranderen en bekijk wat het effect is. De eerste hobbel die ik moest nemen was dat de code een eigen achtergrond meeleverde, maar ik wilde de vogels gewoon voor mijn eigen pagina laten vliegen. Met wat schuiven met divs, met het uncommenten van de meegeleverde achtergrond en alle daaraan verbonden css, is het mij gelukt."
            p3="En dan vind ik het niet fijn wanneer een animatie continu doorgaat; ik wil deze zelf aan & uit kunnen zetten. Dus iets met een button? Na wat gestoei lukte het mij een vogel te stoppen met doorvliegen, als ik er met een muis opstond. Een grappig effect; de vogel bleef vliegen, maar op dezelfde plek. Dit was echter niet helemaal wat ik wilde."
            p4=""
            t1="animation"
            t2="birds"
            t3="pausing"
            linkName1="Flying birds Codepen"
            href1="https://codepen.io/matchboxhero/pen/RLebOY?editors=1100"
            linkName2="CSS animaties, nr. 10 voor uitleg"
            href2="https://www.creativebloq.com/inspiration/css-animation-examples"
            linkName3="How to Play and Pause CSS Animations with CSS Custom Properties"
            href3="https://css-tricks.com/how-to-play-and-pause-css-animations-with-css-custom-properties/"
        />
    );
}

export default BlogBirds;