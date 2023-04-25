import React from 'react';
import "./Music.css";
import Button from "../../components/button/Button";
import {SlArrowUpCircle} from "react-icons/sl";

function Music() {
    return (
        <>
            <h1 className="backgroundcolor" id="toTopOfPage">Muziek</h1>
            <div className="iframe-spotify">


                <div className="buttons-music margin-bottom2">
                    <ul className="buttons-music">
                        <a href="#passenger">
                            <Button className="button button--orange margin-left1">Passenger</Button>
                        </a>
                        <a href="#racoon">
                            <Button className="button button--orange margin-left1">Racoon</Button>
                        </a>
                        <a href="#blof">
                            <Button className="button button--orange margin-left1">Bløf</Button>
                        </a>

                    </ul>
                </div>

                <div className="iframe">
                    <iframe style={{"border-radius": "1em"}}
                            className="iframe-music margin-bottom1"
                            title="passenger"
                            id="passenger"
                            src="https://open.spotify.com/embed/artist/0gadJ2b9A4SKsB1RFkBb66?utm_source=generator&theme=0"
                            width="100%" height="352" frameBorder="0" allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                    </iframe>
                    <a href="#toTopOfPage" className="margin-bottom2"><SlArrowUpCircle size="3em" color="var(--orange)"/></a>
                </div>

                <div className="iframe">
                    <iframe style={{"border-radius": "12px"}}
                            className="iframe-music margin-bottom1"
                            title="racoon"
                            id="racoon"
                            src="https://open.spotify.com/embed/artist/30mNTnmvPn3HwXA5dW1Iza?utm_source=generator&theme=0"
                            width="100%" height="352" frameBorder="0" allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                    </iframe>
                    <a href="#toTopOfPage" className="margin-bottom2"><SlArrowUpCircle size="3em" color="var(--orange)"/></a>
                </div>

                <div className="iframe">
                    <iframe
                        className="iframe-music margin-bottom1"
                        title="blof"
                        id="blof"
                        src="https://open.spotify.com/embed/artist/0KQX2wRHV2VLjuscfJFNxB?utm_source=generator&theme=0"
                        width="100%" height="352" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                    <a href="#toTopOfPage" className="margin-bottom2"><SlArrowUpCircle size="3em" color="var(--orange)"/></a>
                </div>
            </div>

        </>
    )
        ;
}

export default Music;



