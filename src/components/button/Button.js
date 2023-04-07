import React from 'react';
import "./Button.css";

function Button({type, onclick, className, children}) {
    return (
        <div>
            <button
                type={type}
                onClick={onclick}
                className={className}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;