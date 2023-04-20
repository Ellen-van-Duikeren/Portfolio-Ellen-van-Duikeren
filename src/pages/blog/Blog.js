import React from 'react';
import "./Blog.css";
import ArchivePosts from "../../components/ArchivePosts/ArchivePosts";
import BlogRain from "./posts/BlogRain";
import BlogBlogArchive from "./posts/BlogBlogArchive";
import BlogHomepage from "./posts/BlogHomepage";
import BlogHamburgerMenu from "./posts/BlogHamburgerMenu";
import BlogUseState from "./posts/BlogUseState";
import BlogResponsive from "./posts/BlogResponsive";
import BlogDeploying from "./posts/BlogDeploying";
import BlogFavicon from "./posts/BlogFavicon";
import BlogBlog from "./posts/BlogBlog";
import BlogBasics from "./posts/BlogBasics";
import BlogArchive from "./posts/BlogArchive";

import {postsList} from "../../constants/ConstantsList";

function Blog() {
    return (
        <div className="page--flex">

            <div className="blogArchiveMobile">
                <ArchivePosts/>
            </div>

            <div>
                <div className="left-side side__60">
                    <div>
                        <span id="blogArchive"><BlogArchive/></span>
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
            </div>

            {/*hier wordt nog aan gewerkt*/}
            {/*<div>*/}
            {/*    <div className="left-side side__60">*/}
            {/*        <div>*/}
            {/*            {postsList.map((post) => {*/}
            {/*                return (*/}
            {/*                    <span id={`$(post)`}>*/}
            {/*                        {post}*/}
            {/*                    </span>*/}
            {/*                );*/}
            {/*            })}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div>
                <div className="blogArchivePC">
                    <ArchivePosts/>
                </div>

                <div className="block block__orange right-side side__30 margin-top2">
                    <h3>Ideeën in willekeurige volgorde</h3>
                    <ol>
                        <li>blog pagina: als op link in archief geklikt, dan automatisch hele blog ipv lees meer</li>
                        <li>10 meest recente posts tonen en dan button voor meer posts of voor volgende 10</li>
                        <li>blog, zoeken (door te klikken?) op tags</li>
                        <li>blogs, zoeken op datum</li>
                        <li>versie maken met andere, minder heftige, kleuren, met usecontext?</li>
                        <li>uitzoeken hoe ik link kan opnemen in p tekst van Blogcomponent</li>
                        <li>pop ups component</li>
                        <li>schakelaar animatie on/off</li>
                        <li>kloppend hart met geluid</li>
                        <li>one page portfolio</li>
                        <li>games wildplukken? hearts?</li>
                        <li>animations button oid ook in mobiel version</li>
                        <li>Als op let it rain pagina en dan klik op andere pagina animatie navigatie sluiten</li>
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
                        <li className="line-through">all blogs in eigen component zetten ipv allemaal in de blog
                            pagina
                        </li>
                        <li className="line-through">als animatie aan dan 2e nav met buttons voor animatie</li>
                        <li className="line-through">cv bereikbaar vanuit over mij pagina</li>
                        <li className="line-through">achtergrond bijsnijden voor mooiere overgang</li>
                        <li className="line-through">druppels animatie</li>
                        <li className="line-through">archief blogs in mobile version bovenaan aan te klikken button</li>
                    </ol>
                </div>
            </div>

        </div>
    )
        ;
}

export default Blog;