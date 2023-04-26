import React, {useContext} from 'react';
import "./Nav.css";
import {useNavigate} from "react-router-dom";
import {Context} from "../../context/Context";

function NavAnimation() {
    const {flying, letTheBirdsFly} = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="navAnimation--flex">
            <button
                type="button"
                className="button button--large button--brown"
                onClick={() => navigate("/rain")}
            >
                let it rain
            </button>

            <button
                type="button"
                className="button button--large button--brown"
                onClick={() => navigate("/music")}
            >
                muziek
            </button>

            <button
                type="button"
                className="button button--large button--brown"
                onClick={letTheBirdsFly}
            >
                {flying ? "stop those birds!" : "let birds fly" }
            </button>
        </div>
    );
}

export default NavAnimation
;

