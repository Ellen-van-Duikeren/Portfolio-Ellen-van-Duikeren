import React, {useState} from 'react';
import "./Blog.css";
import ArchivePosts from "../../components/ArchivePosts/ArchivePosts";
import {postsList} from "../../constants/ConstantsList";

function Blog() {
    const [morePosts, toggleMorePosts] = useState(false);
    const [fixedIdeas, toggleFixedIdeas] = useState(false);

    return (
        <div className="page--flex" id="toTopOfPage">

            <div className="blogArchiveMobile">
                <ArchivePosts toggleMorePosts={toggleMorePosts}/>
            </div>


            <div>
                <div className="left-side side__60">
                    <div>
                        <h1 className="margin-left1">Posts</h1>
                        {postsList.map((post) => {
                            return (
                                morePosts ?
                                    (
                                        <span id={post[3]}>
                                            {post[1]}
                                         </span>
                                    )
                                    :
                                    post[0] > (postsList.length - 5) &&
                                    (
                                        <span id={post[3]}>
                                          {post[1]}
                                         </span>
                                    ));
                        })}
                    </div>


                    <button
                        type="button"
                        onClick={() => {
                            toggleMorePosts(!morePosts);
                        }}
                        className="button button--large margin-left1 margin-bottom2"
                    >
                        {!morePosts && "meer posts"}
                        {morePosts && "minder posts"}
                    </button>

                </div>
            </div>

            <div>
                <div className="blogArchivePC">
                    <ArchivePosts toggleMorePosts={toggleMorePosts}/>
                </div>

                <div className="block block__orange right-side side__30 margin-top2">
                    <h3>Ideeën in willekeurige volgorde</h3>
                    <ol>
                        <li>blog pagina: als op link in archief geklikt, dan automatisch hele blog ipv lees meer</li>
                        <li>blog, zoeken (door te klikken?) op tags</li>
                        <li>blogs, zoeken op datum</li>
                        <li>versie maken met andere, minder heftige, kleuren, met usecontext?</li>
                        <li>uitzoeken hoe ik link kan opnemen in p tekst van Blogcomponent</li>
                        <li>pop ups component</li>
                        <li>kloppend hart met geluid</li>
                        <li>one page portfolio</li>
                        <li>games wildplukken? hearts?</li>
                        <li>animations button oid ook in mobiel version</li>
                        <li>Als op let it rain pagina en dan klik op andere pagina animatie navigatie sluiten</li>
                        <li>Meerkeuze maken hoeveel posts te tonen: 5/10/20/alles</li>

                        {fixedIdeas &&
                            <>
                                <h3 className="margin-top1">Uitgevoerde ideeën</h3>
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
                                <li className="line-through">schakelaar animatie on/off</li>
                                <li className="line-through">achtergrond bijsnijden voor mooiere overgang</li>
                                <li className="line-through">druppels animatie</li>
                                <li className="line-through">archief blogs in mobile version bovenaan aan te klikken
                                    button
                                </li>
                                <li className="line-through">5 meest recente posts tonen en dan button voor meer posts
                                    of voor volgende 10
                                </li>
                            </>
                        }

                        <button
                            type="button"
                            onClick={() => {
                                toggleFixedIdeas(!fixedIdeas);
                            }}
                            className="button button--large margin-top1 margin-left1 margin-bottom2"
                        >
                            {!fixedIdeas && "show uitgevoerde ideeën"}
                            {fixedIdeas && "verberg uitgevoerde ideeën"}
                        </button>
                    </ol>
                </div>
            </div>

        </div>
    )
        ;
}

export default Blog;