import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";

const BlogUseState = () => {
    return (
        <BlogComp
            date="12 april 2023"
            title="UseState"
            toPage="/blog"
            p1="Ik heb even zitten googlen hoe ik een read more and read less kon maken. Het is eigenlijk heel simpel met useState en met slice. Ik heb een useState [show, toggleShow] aangemaakt en deze standaard op false gezet. Pas als je op de tekst 'lees meer'  klikt, zet ik de toggleShow op true. Et voila. It works."
            p2="De styling had nog wat voeten in de aarde. Ik was begonnen met een button, maar dit werd niet echt mooi; een beetje too much met ook die button tags er nog bij. Uiteindelijk heb ik er voor gekozen om gewoon de tekst 'lees meer' / 'lees minder' te laten zien en dan in een ander kleurtje, zodat duidelijk is dat je erop kan klikken."
            p3="Het lastigste deel was dat ik de tekst 'lees minder' inline wilde hebben met de laatste alinea. Maar vantevoren weet ik niet hoeveel alinea's er zijn in mijn component. Meestal heb ik 2 alinea's in mijn blogs, maar soms ook meer. Ik heb dit opgelost in de blogcomponent door gebruik te maken van een ternary operator. In de ternary vraag ik of er een volgende alinea is. Zo ja, dan laat ik alleen die alinea zien. Zo nee, dan die alinea met de tekst 'lees minder'."
            p4="Easy does it"
            t1="useState"
            t2="lees meer"
            t3="slice"
        />
    );
};

export default BlogUseState;