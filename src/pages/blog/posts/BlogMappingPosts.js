import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";
import ScreenshotPostMapping from "../../../assets/ScreenshotPostMapping.png";

function BlogMappingPosts() {
    return (
        <BlogComp
            date="21 april 2023"
            title="Mapping posts"
            src={ScreenshotPostMapping}
            width="50%"
            p1="Toch wel jammer, dat je een paar uur bezig bent en dat er dan uiterlijk niks is veranderd op je website. Nu ik al elf posts heb, wil ik alleen de eerste 5 posts tonen op mijn blogpagina. Als je op een button klikt, toont hij de andere ook. Om dit mogelijk te maken, heb ik bedacht om mijn posts eerst in een array te zetten, waarover ik dan kan mappen. Dit had meer voeten in de aarde, dan ik eerst dacht."
            p2="Ik moest niet alleen de components, maar ook de titels en de namen die ik gebruik voor de id en href in het archief aanpassen. Het bleef me niet lukken om de naam van de component (<BlogBasics/>), met slice, charAt en toLowerCase, om te bouwen tot een naam voor de id (blogBasics) en voor de href (#blogBasics). Geen idee, maar het was iets met objecten. Dus nu heb ik al die namen in een 2-dimensionale array gezet: [[nr, component, titel, id, href],[...],[...]]."
            p3="Als ik nu een blog geschreven heb met de component BlogComp, dan hoef ik alleen nog maar de 2D-array aan te vullen en mijn blog verschijnt vanzelf op de pagina, inclusief de vermelding in het archief en de link naar het blog. Zo handig. Later leer ik vast nog wel ergens hoe ik dit dynamischer, makkelijker, DRY-er, beter kan maken. Voor nu werkt het weer. Stapje voor stapje."
            t1="blog"
            t2="mapping"
            t3="2D-array"
            t4="useState"
        />
    );
}

export default BlogMappingPosts;