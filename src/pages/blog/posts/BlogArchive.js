import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";

function BlogArchive() {
    return (
        <BlogComp
            date="20 april 2023"
            title="Posts archief"
            toPage="/portfolio_ellen_van_duikeren/blog"
            p1="In de desktop version staat het archief van de posts op mijn blogpagina netjes rechts in de zijbalk. In de mobile version komt deze daardoor echter helemaal achteraan te staan, na alle blogs. Dat is niet handig, als je snel iets wilt opzoeken. Dat moet anders."
            p2="Ik heb het archief eerst in een eigen component gezet. Hierdoor kan ik deze op 2 verschillende plekken in mijn blog.js aanroepen. Door nu elk een eigen className te geven, kan ik de ene in de desktop version wel en in de mobile version niet tonen en de andere andersom (volg je het nog?). Opgelost. Nu verschijnt in de mobile version het overzicht van alle posts bovenaan en kan je snel naar een bepaalde post gaan."
            p3="En zo komt het volgende werkpuntje natuurlijk. Want zo'n lange postslijst, voordat je überhaupt een post ziet, wil ik eigenlijk niet in de mobile version. Het is mooier als dit een dropdown menu wordt. Wordt vervolgd dus."
            t1="blog"
            t2="archive"
            t3="component"
            t4="@media"
        />
    );
}

export default BlogArchive;