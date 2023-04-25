import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";
import screenshotOldHomepage from "../../../assets/ScreenshotHomepageOld.png";

const BlogHomepage = () => {
    return (
        <BlogComp
            date="17 april 2023"
            title="Homepage"
            toPage="/portfolio_ellen_van_duikeren"
            src={screenshotOldHomepage}
            width="100%"
            alt="Old homepage with photo on the left and text on the rigth side"
            p1="De oude homepage zag er een beetje blokkerig uit en erg lijkend op de meeste andere pagina's met aan de ene kant een foto en aan de andere kant tekst. Dat kon natuurlijk mooier, eleganter en dynamischer. Ik heb er nu voor gekozen om gewoon één blok te nemen over 60% van de pagina. De nav en footer heb ik 100vw gemaakt, zodat ze een duidelijke markering zijn van het begin en einde van de pagina."
            p2="Om de aandacht op mijn naam en functie te leggen, laat ik deze invliegen. Ze komen van rechts naar links mijn homepage op, waarbij mijn functie anderhalf keer zo lang hierover doet dan mijn naam. Je aandacht wordt er direct naartoe getrokken. Met webcode tools op 'https://webcode.tools/generators/css/keyframe-animation' maak je heel makkelijk zelf animaties, zelfs zonder kennis van css."
            p3="Ik heb wat geëxperimenteerd met een foto als achtergrond, wat er erg mooi uit zag, maar dat zou teveel af gaan wijken van de rest van de website. Ik vind het mooi als de gehele website één geheel uitstraalt. Deze optie met foto als achtergrond ga ik uitwerken op mijn one-page-portfolio. Ik zie heel vaak dat mensen tegenwoordig alles gewoon op één pagina zetten in hun portfolio. De lay-out is soberder met veel wit en één grote foto bovenaan. Dit wil ik ook een keer maken. Ik heb voor deze one-page-portfolio alvast een  verwijzing vanaf mijn homepage gemaakt."
            p4="Op de contact pagina heb ik wat styling aangepast; de bolletjes voor de opsomming van de ul heb ik weggehaald. Voor elk item heb ik nu een react-icon geplaatst, zodat ze allemaal weer mooi onder elkaar uitlijnen en je mss makkelijker kan vinden wat je zoekt."
            href1="https://webcode.tools/generators/css/keyframe-animation"
            linkName1="Webcode animations"
            t1="homepage"
            t2="animation"
            t3="icons"
        />
    );
};

export default BlogHomepage;