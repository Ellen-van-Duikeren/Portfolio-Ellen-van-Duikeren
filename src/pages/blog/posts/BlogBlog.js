import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";

const BlogBlog = () => {
    return (
        <BlogComp
            date="7 april 2023"
            title="Een nieuwe pagina: blog"
            toPage="/blog"
            p1="Vandaag gewerkt aan de blog pagina. Ik heb twee blogs geschreven, waarvoor ik een component blogtile gebruik en alvast een ruimte gecreeerd voor het maken van een archief. Tenslotte heb ik een lijst gemaakt met ideeen wat ik allemaal nog wil toevoegen of veranderen aan mijn bestaande website. Er zitten gekke, maar ook awesome ideeen tussen."
            p2="Ik heb mijn css verder uitgebouwd. Ik merkte dat ik toch wel vaak een oranje vlak nodig heb met afgeronde hoeken en schaduw. Omdat ik blijf vergeten hoe dat moet met die schaduw, moest ik die steeds kopieren. Maar dat heb ik nu opgelost door een className block te maken."
            p3="Qua structuur van mijn website heb ik weinig veranderd. Ik heb alleen de nieuwe pagina blog toegevoegd aan de nav en de app. Ik heb wat lopen stoeien met css, omdat ik graag alles in het midden uitgelijnd wil hebben bij grotere schermen en een max width van 1200 px, maar dat is nog niet helemaal gelukt. Die 1200px komt op meerdere plekken voor en dat moet anders en het uitlijnen, mmmm, daar moet ik ook nog even verder naar kijken. Soms denk ik dat ik dingen echt snap, maar flexbox heeft me al meerdere keren verrast. Ooit doorgrond ik het helemaal."
            p4="Tenslotte heb ik het nog mogelijk gemaakt om react icons toe te voegen met npm install react-icons --save. Ik heb ergens een smiley nodig, maar ik zie zo'n ijst met icons ook als een soort snoepdoos. Lekker scrollen om te kijken welke ik nu zal kiezen."
            t1="blog"
            t2="shadow"
            t3="ideeen"
        />
    );
};

export default BlogBlog;