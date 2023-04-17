import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";

const BlogDeploying = () => {
    return (
        <BlogComp
            date="10 april 2023"
            title="Deploying website"
            p1="Dat was een klus zeg, om mijn website op github pages gedeployed te krijgen. Voor alles is een eerste keer."
            p2="Waar liep ik tegenaan. Er zijn verschillende tutorials, die het natuurlijk allemaal net even anders doen. Ik heb wat geschakeld tussen deze tutorials. Ik had al vrij snel mijn website in de lucht, maar alleen mijn readme. Vervolgens, na wat veranderingen, had ik alleen een blanco pagina over. Beetje saai, vond ik. Uiteindelijk lukte het, nadat ik de hoofdletters van mijn repository door kleine letters had vervangen. Jippie, online. Meteen op mijn LinkedIn gezet en nu weer lekker verder."
            t1="deployed"
            t2="gh-pages"
        />
    );
};

export default BlogDeploying;