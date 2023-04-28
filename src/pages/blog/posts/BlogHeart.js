import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";
import ScreenshotHeartBeat from "../../../assets/ScreenshoHeartBeat.png";

function BlogHeart() {
    return (
        <BlogComp
            date="28 april 2023"
            title="Heart Beating"
            toPage="/"
            src={ScreenshotHeartBeat}
            width="100%"
            p1="En nog een kleine animatie. Ik wilde graag een heart beating maken. In mijn baan als klinisch verloskundige heb ik natuurlijk heel veel naar de hartslag van baby’s geluisterd. Mooi. Ik heb toch aan veel toekomstige ouders gemeld dat ik het leuk zou vinden als iemand een keer een muziekstuk zou maken op de (snelle) hartslag van een baby. Maar vooralsnog heb ik nog van niemand iets ontvangen."
            p2="Een animatie van een heart beating maken is niet moeilijk als je iets af weet van animation en keyframes. Er waren twee lastiger punten. Ik wilde een hart hebben die je dus kunt verkleinen en vergroten. De react icon werkte niet. Kennelijk heeft deze een standaard grootte. En veel plaatjes met een hart hebben een achtergrond. Zelfs als ze zeggen transparant te zijn, kreeg ik een irritant ruitjespatroon te zien. Dit heeft vast iets te maken met extensies. Uiteindelijk heb ik zo'n free programmaatje gebruikt om een afbeelding van een hart uit te snijden. Oeps, dit klinkt wel erg dramatisch, uitsnijden. Maar je begrijpt wat ik bedoel."
            p3="Je kan het hart ook zelf 'tekenen'. In de link zie je hoe iemand dit gedaan heeft. Ik vond het voor nu leuker om een kant en klaar plaatje te gebruiken."
            p4="Het andere lastige punt was om het geluid min of meer gelijk op te laten lopen met de hartslag zelf. Dit is veel trial and error, waarbij je dus de percentages en scaling van je animatie zoveel mogelijk op het geluid moet aanpassen. Dit is aardig gelukt. Als je tenminste het geluid op het juiste moment aanzet."
            t1="animation"
            t2="heartbeat"
            t3="audio"
            linkName1="Heartbeating met zelf gemaakt hart"
            href1="https://codepen.io/CTNieves/pen/LZmLox"
            linkName2=""
            href2=""
            linkName3=""
            href3=""
        />    );
}

export default BlogHeart;