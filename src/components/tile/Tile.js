import React from 'react';
import "./Tile.css"

function Tile({nameImg, title, url, description, languages, date}) {
    return (
        <div className="tile">

            <img src={nameImg} className="tile--image"/>

            <div className="tile--text">
                <h3>{title}</h3>
                <p><a href={url} target="_blank">{url}</a></p>
                <p>{description}</p>
                <p>{languages}</p>
                <p>{date}</p>
            </div>

        </div>
    );
}

export default Tile;