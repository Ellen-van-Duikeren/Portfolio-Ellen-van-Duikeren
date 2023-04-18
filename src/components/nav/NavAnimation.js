import React from 'react';
import "../button/Button.css";
import "./Nav.css";
import {useNavigate} from "react-router-dom";

function NavAnimation() {

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
                    // onClick={() => <Rain/>}
                >
                    animatie2
                </button>

                <button
                    type="button"
                    className="button button--large button--brown"
                    // onClick={() => <Rain/>}
                >
                    animatie3
                </button>
            </div>
    );
}

export default NavAnimation;

