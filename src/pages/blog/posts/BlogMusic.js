import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";
import ScreenshotMusic from "../../../assets/ScreenshotMusic.png";

function BlogMusic(props) {
    return (
<BlogComp
    date="25 april 2023"
    title="Music was my first love"
    toPage="/music"
    src={ScreenshotMusic}
    width="100%"
    p1="Ik had zin om wat muziek toe te voegen aan mijn website. Muziek zegt natuurlijk veel over de persoon die je bent. Ik heb een keer mijn ultieme afspeellijst aangemaakt op Music, maar ik denk dat ik daar ongeveer 3/4 van de top 2000 ingestopt heb. Die kunnen jullie zelf natuurlijk ook vinden."
    p2="Het was even zoeken, maar eigenlijk maakt Music het je wel heel makkelijk. Ik kwam al snel op een website om je eigen top 5 te kunnen laten zien, maar aangezien mijn jongste dochter ook veel op hetzelfde account zit, is dit niet helemaal MIJN top 10. Dus ik heb er voor gekozen om mijn top 3 artiesten (voor nu) op mijn website te zetten."
    p3="Maar hoe doe je dat dan, dat embedden? Je kunt dus heel eenvoudig een iframe kopiëren door in spotify rechter muis te klikken op de artiest (of wat dan ook) en dan op share en embed artist te klikken. In de links hieronder lees je hoe dat precies in zijn werking gaat."
    p4="Jammer genoeg blijkt er nu net een error te zijn waarbij de play button niet meer getoond wordt in de embedded iframe. Je ziet nu wel het logo van spotify en als je daarop klikt, ga je naar een nieuwe (Music) pagina met de playlist. Even wachten tot ze deze bug weer gefixed hebben."
    t1="animations"
    t2="music"
    t3="iframe"
    linkName1="Get your 5 toptracks and listen to these songs right here"
    href1="https://developer.spotify.com/"
    linkName2="Embed an album / artist / podcast from Music"
    href2="https://developer.spotify.com/documentation/embeds/tutorials/creating-an-embed"
    linkName3="Error not showing play button"
    href3="https://community.spotify.com/t5/Spotify-for-Developers/Spotify-Embed-no-longer-has-play-button/td-p/5568509"
/>
    );
}

export default BlogMusic;