import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";
import ScreenshotHamburgerMenu from "../../../assets/ScreenshotHamburgerMenu.png";

const BlogHamburgerMenu = () => {
    return (
        <BlogComp
            date="13 april 2023"
            title="Hamburgermenu"
            src={ScreenshotHamburgerMenu}
            width="40%"
            p1="Ik kan me er echt aan storen als de lay out gewoon niet mooi is, zoals een navigatiemenu dat eigenlijk niet past op een mobile version; dan zie je van die links naast en onder elkaar, gewrapt en dus niet mooi uitgelijnd. Brrr. Vandaag heb ik dan ook een hamburgermenu gemaakt voor de mobile version; je kent ze wel. Alhoewel, een van de kunstenaars voor wie ik een wordpress website maakte, kende deze term nog niet. Gelukkig heb ik het kennelijk zo vaak over het hamburgermenu gehad, dat ze me vertelde, dat ze mij nu steeds 'hamburgermenu' hoort zeggen in haar hoofd, als ze nu zelf aan haar website werkt."
            p2="Ik had een hele duidelijke you tube video voor het maken van het hamburgermenu: 'https://youtu.be/Et5tDPoU03c'. Ik had er nog nooit een gemaakt, maar eigenlijk had ik alle ingredienten die ik hiervoor nodig had, in mijn bootcamp full stack opleiding gehad. Mooi."
            t1="hamburger"
            t2="useState"
            t3="@media"
        />
    );
};

export default BlogHamburgerMenu;