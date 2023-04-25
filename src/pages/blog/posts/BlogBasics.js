import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";

const BlogBasics = () => {
    return (
        <BlogComp
            date="6 april 2023"
            title="De basis, een statische website"
            toPage="/portfolio_ellen_van_duikeren"
            p1="Gaaf dat ik binnen een paar uur een volledige statische website kan bouwen in React. Een website met 5 pagina's: homepage, over mij, projecten, contact en cv. Ik heb hierbij gebruik gemaakt van routes, :root variabelen, components en natuurlijk plain html en css; niks speciaals, wel functioneel."
            p2="Natuurlijk is deze website nog erg basic. Ik ga de komende tijd verder werken aan mijn portfolio, pagina's uitbouwen, leuke elementen toevoegen, wat spelen met animaties,.... Ergens op deze pagina heb ik een lijst gemaakt met ideeen, grote en kleine, die ik verder wil gaan uitwerken. In dit blog , kan je lezen hoe dit gaat."
            t1="statisch"
            t2="routes"
            t3=":root"
            t4="component"
        />
    );
};

export default BlogBasics;