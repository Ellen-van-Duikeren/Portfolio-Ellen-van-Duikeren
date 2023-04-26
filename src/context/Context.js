import React, {createContext, useState} from 'react';

export const Context = createContext({});

function ContextProvider({children}) {
    const [constants, setConstants] = useState({
        animationMenu: false,
        letItRain: false,
        flying: false
    });

    function showAnimationMenu() {
        setConstants({
            ...constants,
            animationMenu: true
        })
    }

    function letItRainFunction() {
        setConstants({
            ...constants,
            letItRain: true
        })
    }

    function letTheBirdsFly() {
        if (constants.flying) {
            setConstants({
                ...constants,
                flying: false
            })
        } else {
            setConstants({
                ...constants,
                flying: true
            })
        }
    }

    function stopTheBirdsFlying() {
        setConstants({
            ...constants,
            flying: false
        })
    }

    const data = {
        animationMenu: constants.animationMenu,
        letItRain: constants.letItRain,
        flying: constants.flying,
        showAnimationMenu: showAnimationMenu,
        letItRainFunction: letItRainFunction,
        letTheBirdsFly: letTheBirdsFly,
        stopTheBirdsFlying: stopTheBirdsFlying
    }


    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}


export default ContextProvider;