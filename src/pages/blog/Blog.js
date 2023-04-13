import React from 'react';
import "./Blog.css";
import BlogComp from "../../components/blogComp/BlogComp";


function Blog() {
    return (
        <div className="page--flex">
            <div className="left-side side__60">
                <div>
                    <BlogComp
                        date="13 april 2023"
                        title="Hamburgermenu"
                        p1="Ik kan me er echt aan storen, als de lay out gewoon niet mooi is, zoals een navigatiemenu dat eigenlijk niet past op een mobile version; dan zie je van die links naast en onder elkaar, gewrapt en dus niet mooi uitgelijnd. Brrr. Vandaag heb ik dan ook een hamburgermenu gemaakt voor de mobile version; je kent ze wel. Alhoewel, een van de kunstenaars voor wie ik een wordpress website maakte, kende deze term nog niet. Gelukkig heb ik het kennelijk zo vaak over het hamburgermenu gehad, dat ze me vertelde, dat ze mij nu steeds 'hamburgermenu' hoort zeggen in haar hoofd, als ze nu zelf aan haar website werkt."
                        p2="Ik had een hele duidelijke you tube video voor het maken van het hamburgermenu: 'https://youtu.be/Et5tDPoU03c'. Ik had er nog nooit een gemaakt, maar eigenlijk had ik alle ingredienten die ik hiervoor nodig had, in mijn bootcamp full stack opleiding gehad. Mooi."
                        t1="hamburger"
                        t2="useState"
                        t3="@media"


                    />

                    <BlogComp
                        date="12 april 2023"
                        title="UseState"
                        p1="Ik heb even zitten googlen hoe ik een read more and read less kon maken. Het is eigenlijk heel simpel met useState en met slice. Ik heb een useState [show, toggleShow] aangemaakt en deze standaard op false gezet. Pas als je op de tekst 'lees meer'  klikt, zet ik de toggleShow op true. Et voila. It works."
                        p2="De styling had nog wat voeten in de aarde. Ik was begonnen met een button, maar dit werd niet echt mooi; een beetje too much met ook die button tags er nog bij. Uiteindelijk heb ik er voor gekozen om gewoon de tekst 'lees meer' / 'lees minder' te laten zien en dan in een ander kleurtje, zodat duidelijk is dat je erop kan klikken."
                        p3="Het lastigste deel was dat ik de tekst 'lees minder' inline wilde hebben met de laatste alinea. Maar vantevoren weet ik niet hoeveel alinea's er zijn in mijn component. Meestal heb ik 2 alinea's in mijn blogs, maar soms ook meer. Ik heb dit opgelost in de blogcomponent door gebruik te maken van een ternary operator. In de ternary vraag ik of er een volgende alinea is. Zo ja, dan laat ik alleen die alinea zien. Zo nee, dan die alinea met de tekst 'lees minder'."
                        p4="Easy does it"
                        t1="useState"
                        t2="lees meer"
                        t3="slice"
                    />

                    <BlogComp
                        date="11 april 2023"
                        title="Responsive"
                        p1="Vandaag een begin gemaakt met het responsive maken van mijn website. Eigenlijk was dit in een 20 minuten voor elkaar doordat ik alle fonts al gerelateerd had aan een basefont en dus alleen deze hoefde aan te passen. Daarnaast nog even de blokken onder elkaar zetten op kleinere schermen i.p.v. naast elkaar en het merendeel is voor elkaar."
                        p2="Zoals ik eerder al schreef, had ik geprobeerd alle content te centreren, maar was dat nog niet gelukt. Nu was het een klusje van 2 minuten, nadat ik voor het slapen gaan een brainwave kreeg (gebeurt me vaker) en het natuurlijk heel heel simpel bleek. Eigenlijk meer een beginnersdingetje met 'margin 0 auto' in app.css. Oeps."
                        t1="responsive"
                        t2="@media"
                    />

                    <BlogComp
                        date="10 april 2023"
                        title="Deploying website"
                        p1="Dat was een klus zeg, om mijn website op github pages gedeployed te krijgen. Voor alles is een eerste keer."
                        p2="Waar liep ik tegenaan. Er zijn verschillende tutorials, die het natuurlijk allemaal net even anders doen. Ik heb wat geschakeld tussen deze tutorials. Ik had al vrij snel mijn website in de lucht, maar alleen mijn readme. Vervolgens, na wat veranderingen, had ik alleen een blanco pagina over. Beetje saai, vond ik. Uiteindelijk lukte het, nadat ik de hoofdletters van mijn repository door kleine letters had vervangen. Jippie, online. Meteen op mijn LinkedIn gezet en nu weer lekker verder..."
                        t1="deployed"
                        t2="gh-pages"
                    />

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
                        <li className="line-through">hosten google / github / gitpages / netlify?</li>
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
                        <li className="line-through">blogs inkorten... met mogelijkheid tot 'lees meer'</li>
                        <li className="line-through">hamburgermenu on mobile</li>
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