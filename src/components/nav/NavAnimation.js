import React, {useContext} from 'react';
import "./Nav.css";
import {useNavigate} from "react-router-dom";
import {AnimationContext} from "../../context/AnimationContext";

function NavAnimation() {
    const {raining, letItRainFunction, flying, letTheBirdsFly, heartBeating, letTheHeartBeat} = useContext(AnimationContext);
    const navigate = useNavigate();

    return (
        <div className="navAnimation--flex">
            <button
                type="button"
                className="button button--large button--brown"
                onClick={letItRainFunction}
            >
                {raining ? "stop the rain" : "let it rain"}
            </button>

            <button
                type="button"
                className="button button--large button--brown"
                onClick={letTheBirdsFly}
            >
                {flying ? "stop those birds!" : "let birds fly"}
            </button>

            <button
                type="button"
                className="button button--large button--brown"
                onClick={letTheHeartBeat}
            >
                {heartBeating ? "stop heartbeating" : "let heart beat"}
            </button>

            <button
                type="button"
                className="button button--large button--brown"
                onClick={() => navigate("/music")}
            >
                muziek
            </button>
        </div>
    );
}

export default NavAnimation
;

