import React from 'react';
import "./Heartbeat.css";
import heart from "../../assets/heart.png";
import heartBeat from "../../assets/mixkit-human-single-heart-beat-490.wav";

function Heartbeat() {

    return (
        <div className="animation-heart">
            <audio controls loop className="audio">
                <source src={heartBeat} type="audio/wav"/>
                Your browser does not support the audio element.
            </audio>
            <img src={heart}  className="heart" alt="heart beating"/>
        </div>
    );
}

export default Heartbeat;