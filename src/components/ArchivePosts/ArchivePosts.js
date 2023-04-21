import React, {useState} from 'react';
import "./ArchivePosts.css";
import {postsList} from "../../constants/ConstantsList";


function ArchivePosts({toggleMorePosts}) {
    const [morePostsArchive, toggleMorePostsArchive] = useState(false);

    return (
        <div>
            <div className="block__orange right-side side__30">
                <h3>Archief posts</h3>
                <ul>
                    {postsList.map((post) => {
                        return (
                            morePostsArchive ?
                                (
                            <a href={post[4]}>
                                <li>{post[2]}</li>
                            </a>
                    )
                                :
                                post[0] > (postsList.length - 5) &&
                                (
                                    <a href={post[4]}>
                                        <li>{post[2]}</li>
                                    </a>
                                )
                        );
                    })}

                    <button
                        type="button"
                        onClick={() => {
                            toggleMorePosts(true);
                            toggleMorePostsArchive(!morePostsArchive);
                        }}
                        className="button button--large margin-top1 margin-left1 margin-bottom2"
                    >
                        {!morePostsArchive && "meer posts"}
                        {morePostsArchive && "minder posts"}

                    </button>

                </ul>
            </div>
        </div>
    );
}

export default ArchivePosts;