import React from 'react';
import "./ArchivePosts.css";

function ArchivePosts() {
    return (
        <div>
            <div className="block__orange right-side side__30">
                <h3>Archief posts</h3>
                <ol>
                    <a href="#blogArchive">
                        <li>Archief posts</li>
                    </a>
                    <a href="#blogRain">
                        <li>Let it rain</li>
                    </a>
                    <a href="#blogBlogArchive">
                        <li>Opschonen code in blog.js</li>
                    </a>
                    <a href="#blogHomepage">
                        <li>Homepage</li>
                    </a>
                    <a href="#blogHamburgermenu">
                        <li>Hamburgermenu</li>
                    </a>
                    <a href="#blogUseState">
                        <li>Usestate</li>
                    </a>
                    <a href="#blogResponsive">
                        <li>Responsive</li>
                    </a>
                    <a href="#blogDeploying">
                        <li>Deploying website</li>
                    </a>
                    <a href="#blogFavicon">
                        <li>Over favicon, title en avatars</li>
                    </a>
                    <a href="#blogBlog">
                        <li>Een nieuwe pagina: blog</li>
                    </a>
                    <a href="#blogBasics">
                        <li>De basis, een statische website</li>
                    </a>
                </ol>
            </div>
        </div>
       );
}

export default ArchivePosts;