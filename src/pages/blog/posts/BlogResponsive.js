import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";

const BlogResponsive = () => {
    return (
        <BlogComp
            date="11 april 2023"
            title="Responsive"
            p1="Vandaag een begin gemaakt met het responsive maken van mijn website. Eigenlijk was dit in een 20 minuten voor elkaar doordat ik alle fonts al gerelateerd had aan een basefont en dus alleen deze hoefde aan te passen. Daarnaast nog even de blokken onder elkaar zetten op kleinere schermen i.p.v. naast elkaar en het merendeel is voor elkaar."
            p2="Zoals ik eerder al schreef, had ik geprobeerd alle content te centreren, maar was dat nog niet gelukt. Nu was het een klusje van 2 minuten, nadat ik voor het slapen gaan een brainwave kreeg (gebeurt me vaker) en het natuurlijk heel heel simpel bleek. Eigenlijk meer een beginnersdingetje met 'margin 0 auto'. Oeps."
            t1="responsive"
            t2="@media"
        />
    );
};

export default BlogResponsive;