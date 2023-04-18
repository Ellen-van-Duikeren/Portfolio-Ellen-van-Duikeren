import React from 'react';
import "./Blog.css";
import BlogHomepage from "./posts/BlogHomepage";
import BlogUseState from "./posts/BlogUseState";
import BlogResponsive from "./posts/BlogResponsive";
import BlogDeploying from "./posts/BlogDeploying";
import BlogFavicon from "./posts/BlogFavicon";
import BlogBlog from "./posts/BlogBlog";
import BlogBasics from "./posts/BlogBasics";
import BlogHamburgerMenu from "./posts/BlogHamburgerMenu";
import BlogBlogArchive from "./posts/BlogBlogArchive";
import BlogRain from "./posts/BlogRain";

function Blog() {
    return (
        <div className="page--flex">
            <div className="left-side side__60">
                <div>
                    <span id="blogRain"><BlogRain/></span>
                    <span id="blogBlogArchive"><BlogBlogArchive/></span>
                    <span id="blogHomepage"><BlogHomepage/></span>
                    <span id="blogHamburgermenu"><BlogHamburgerMenu/></span>
                    <span id="blogUseState"><BlogUseState/></span>
                    <span id="blogResponsive"><BlogResponsive/></span>
                    <span id="blogDeploying"><BlogDeploying/></span>
                    <span id="blogFavicon"><BlogFavicon/></span>
                    <span id="blogBlog"><BlogBlog/></span>
                    <span id="blogBasics"><BlogBasics/></span>
                </div>
            </div>

            <div>
                <div className="block block__orange right-side side__30">
                    <h3>Archief posts</h3>
                    <ol>
                        <a href="#blogRain"><li>Let it rain</li></a>
                        <a href="#blogBlogArchive"><li>Opschonen code in blog.js</li></a>
                        <a href="#blogHomepage"><li>Homepage</li></a>
                        <a href="#blogHamburgermenu"><li>Hamburgermenu</li></a>
                        <a href="#blogUseState"><li>Usestate</li></a>
                        <a href="#blogResponsive"><li>Responsive</li></a>
                        <a href="#blogDeploying"><li>Deploying website</li></a>
                        <a href="#blogFavicon"><li>Over favicon, title en avatars</li></a>
                        <a href="#blogBlog"><li>Een nieuwe pagina: blog</li></a>
                        <a href="#blogBasics"><li>De basis, een statische website</li></a>
                    </ol>
                </div>

                <div  className="block block__orange right-side side__30 margin-top2">
                    <h3>Ideeën in willekeurige volgorde</h3>
                    <ol>
                        <li>blog pagina: als op link in archief geklikt, dan automatisch hele blog ipv lees meer</li>
                        <li>archief blogs in mobile version bovenaan aan te klikken button</li>
                        <li>10 meest recente posts tonen en dan button voor meer posts of voor volgende 10</li>
                        <li>blog, zoeken (door te klikken?) op tags</li>
                        <li>blogs, zoeken op datum</li>
                        <li>versie maken met andere, minder heftige, kleuren, met usecontext?</li>
                        <li>uitzoeken hoe ik link kan opnemen in p tekst van Blogcomponent</li>
                        <li>achtergrond bijsnijden voor mooiere overgang</li><li>pop ups component</li>
                        <li>schakelaar animatie on/off</li>
                        <li>als animatie aan dan 2e nav met buttons voor animatie</li>
                        <li>kloppend hart met geluid</li>
                        <li>one page portfolio</li>
                        <li>druppels animatie</li>
                        <li>games wildplukken? hearts?</li>
                        <li className="line-through">blog pagina</li>
                        <li className="line-through">icoon react vervangen</li>
                        <li className="line-through">hosten google / github / gitpages / netlify?</li>
                        <li className="line-through">responsive maken</li>
                        <li className="line-through">hamburgermenu on mobile</li>
                        <li className="line-through">foto avatar van mijzelf</li>
                        <li className="line-through">blog met tags</li>
                        <li className="line-through">blogs inkorten... met mogelijkheid tot 'lees meer'</li>
                        <li className="line-through">homepage aanpassen</li>
                        <li className="line-through">homepage fly in naam</li>
                        <li className="line-through">archief voor blogs</li>
                        <li className="line-through">all blogs in eigen component zetten ipv allemaal in de blog pagina</li>
                        <li className="line-through">cv bereikbaar vanuit over mij pagina</li>
                    </ol>
                </div>
            </div>
        </div>
    )
        ;
}

export default Blog;