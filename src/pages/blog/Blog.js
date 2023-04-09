import React from 'react';
import "./Blog.css";
import BlogComp from "../../components/blogComp/BlogComp";


function Blog() {
    return (
        <div className="page--flex">
            <div className="left-side side__50">
                <div>

                    <BlogComp
                        date="8 april 2023"
                        title="Over favicon, title en avatars"
                        p1="Vandaag heb ik een avatar gemaakt, omdat ik bijna nooit leuk op een foto sta. Die avatars zijn hier namelijk wel keigoed in en je moet gebruik maken van je talenten, toch? Ik  heb de app avatoon gebruikt. Simpel in gebruik, maar ik werd ook simpel van de veeeele adds. Bij alles wat ik deed kreeg ik er gratis een add bij van 30 seconden ofzo. Ach ja, je moet er wat voor over hebben."
                        p2="Nog een quick win. Ik heb de favicon en de titel van React in de browser tab vervangen. De favicon is dat plaatje dat je op je tab ziet staan bovenin je scherm, naast de titel. Dit is echt een klusje van 5 minuten. In je map public moet je de favicon.ico vervangen door jouw plaatje en de titel kan je aanpassen in de index.html bij title."
                        t1="avatar"
                        t2="title"
                        t3="favicon"

                    />

                    <BlogComp
                        date="7 april 2023"
                        title="Een nieuwe pagina: blog"
                        p1="Vandaag gewerkt aan de blog pagina. Ik heb twee blogs geschreven, waarvoor ik een component blogtile gebruik en alvast een ruimte gecreeerd voor het maken van een archief. Tenslotte heb ik een lijst gemaakt met ideeen wat ik allemaal nog wil toevoegen of veranderen aan mijn bestaande website. Er zitten gekke, maar ook awesome ideeen tussen."
                        p2="Ik heb mijn css verder uitgebouwd. Ik merkte dat ik toch wel vaak een oranje vlak nodig heb met afgeronde hoeken en schaduw. Omdat ik blijf vergeten hoe dat moet met die schaduw, moest ik die steeds kopieren. Maar dat heb ik nu opgelost door een className block te maken."
                        p3="Qua structuur van mijn website heb ik weinig veranderd. Ik heb alleen de nieuwe pagina blog toegevoegd aan de nav en de app. Ik heb wat lopen stoeien met css, omdat ik graag alles in het midden uitgelijnd wil hebben bij grotere schermen en een max width van 1200 px, maar dat is nog niet helemaal gelukt. Die 1200px komt op meerdere plekken voor en dat moet anders en het uitlijnen, mmmm, daar moet ik ook nog even verder naar kijken. Soms denk ik dat ik dingen echt snap, maar flexbox heeft me al meerdere keren verrast. Ooit doorgrond ik het helemaal."
                        p4="Tenslotte heb ik het nog mogelijk gemaakt om react icosn toe te voegen met npm install react-icons --save. Ik heb ergens een smiley nodig, maar ik zie zo'n ijst met icons ook als een soort snoepdoos. Lekker scrollen om te kijken welke ik nu zal kiezen. "

                        t1="blog"
                        t2="shadow"
                        t3="ideeen"
                        t4=""
                    />

                    <BlogComp
                        date="6 april 2023"
                        title="De basis, een statische website"
                        p1="Gaaf dat ik binnen een paar uur een volledige statische website kan bouwen in React. Een website met 5 pagina's: homepage, over mij, projecten, contact en cv. Ik heb hierbij gebruik gemaakt van routes, :root variabelen, components en natuurlijk plain html en css; niks speciaals, wel functioneel."
                        p2="Natuurlijk is deze website nog erg juniorish. Ik ga de komende tijd verder werken aan mijn portfolio, pagina's uitbouwen, leuke elementen toevoegen, wat spelen met animaties,.... Hieronder heb ik een lijst gemaakt met ideeen, grote en kleine, die ik verder wil gaan uitwerken. In dit blog , kan je lezen hoe dit gaat."
                        t1="statisch"
                        t2="routes"
                        t3=":root"
                        t4="components"
                    />
                </div>
            </div>

            <div className="block block__orange right-side side__30">
                <div>
                    <h3>Archief</h3>
                    <p>Hier ga ik nog een archief bouwen voor de blogs die ik heb geschreven.</p>
                </div>
                <div className="margin-top2">
                    <h3>Ideeen in willekeurige volgorde</h3>
                    <ol>
                        <li>hosten google / github / gitpages / netlify?</li>
                        <li>responsive maken</li>
                        <li className="line-through">foto avatar van mijzelf</li>
                        <li>pop ups component</li>
                        <li>projecten pagina, minder info en pop ups maken / lees meer</li>
                        <li>schakelaar animatie on/off</li>
                        <li>homepage aanpassen met transparanter naar het midden</li>
                        <li>homepage fly in naam</li>
                        <li>als animatie aan dan 2e nav met buttons voor animatie</li>
                        <li className="line-through">blog pagina</li>
                        <li className="line-through">blog met tags</li>
                        <li>hamburgermenu</li>
                        <li className="line-through">cv bereikbaar vanuit over mij pagina</li>
                        <li>cv's aanvullen mindmap / tekstueel / visueel</li>
                        <li>kloppend hart met geluid</li>
                        <li>one page website</li>
                        <li>druppels animatie</li>
                        <li className="line-through">icoon react vervangen</li>
                        <li>games wildplukken? hearts?</li>
                        <li>zoekfunctie voor blog, obv tags/datum?</li>
                    </ol>
                </div>
            </div>
        </div>
    )
        ;
}

export default Blog;