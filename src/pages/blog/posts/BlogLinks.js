import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";
import ScreenshotBlogLinks from "../../../assets/ScreenshotBlogLinks.png";

function BlogLinks() {
    return (
        <BlogComp
            date="26 april 2023"
            title="Links"
            toPage="/blog"
            src={ScreenshotBlogLinks}
            width="100%"
            p1="Tijd om weer eens ergens in te duiken. Ik had eerder geschreven dat ik de weg kwijt was in wanneer je nu a href, wanneer NavLink en navigate toepast. En zoals met veel dingen; als je het opzoekt en het nogmaals doorleest, dan is het pretty easy. Toch?"
            p2="Let's start. In React gebruik je a href alleen nog maar om te linken naar pagina's buiten je eigen website. Binnen je website gebruik je Link to. Ik heb dus meteen alle links binnen mijn website aangepast. En hé, het werd er ook nog makkelijker op, want ik hoefde nu niet te linken naar '/portfolio_ellen_van_duikeren/blog', maar gewoon naar '/blog'. Toch weer minder code."
            p3="De NavLink werkt hetzelfde als een Link to, maar heeft een extra eigenschap. 'A <NavLink> is a special kind of <Link> that knows whether or not it is 'active' or 'pending'. This is useful when building a navigation menu, such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected.' Ofwel, je kan in je nav laten zien op welke pagina je currently bent, bijvoorbeeld door het te onderstrepen."
            p4="And last but not least. Wanneer gebruik je dan navigate to? Die gebruik je als je bijvoorbeeld in een button op onClick naar een andere pagina wilt gaan: onClick={() => navigate('/music')}. Dat was het dus, easy does it, als je het zo bij elkaar ziet. En dit wisten jullie natuurlijk al lang."
            t1="link"
            t2="NavLink"
            t3="a href"
            t4="navigate"
            linkName1="React NavLink"
            href1="https://reactrouter.com/en/main/components/nav-link"
            linkName2=""
            href2=""
            linkName3=""
            href3=""
        />
    );
}

export default BlogLinks;