import React, {createContext, useState} from 'react';

export const AnimationContext = createContext({});

function AnimationContextProvider({children}) {
    const [constants, setConstants] = useState({
        animationMenu: false,
        raining: false,
        flying: false,
        heartBeating: false
    });

    function showAnimationMenu() {
        setConstants({
            ...constants,
            animationMenu: true
        })
    }

    function letItRainFunction() {
        if (constants.raining) {
            setConstants({
                ...constants,
                raining: false
            })
        } else {
            setConstants({
                ...constants,
                raining: true
            })
        }
    }

    function stopTheRain() {
        setConstants({
            ...constants,
            raining: false
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

    function letTheHeartBeat() {
        if (constants.heartBeating) {
            setConstants({
                ...constants,
                heartBeating: false
            })
        } else {
            setConstants({
                ...constants,
                heartBeating: true
            })
        }
    }

    function stopTheHeartBeating() {
        setConstants({
            ...constants,
            heartBeating: false
        })
    }

    const data = {
        animationMenu: constants.animationMenu,
        raining: constants.raining,
        flying: constants.flying,
        heartBeating: constants.heartBeating,
        showAnimationMenu: showAnimationMenu,
        letItRainFunction: letItRainFunction,
        stopTheRain: stopTheRain,
        letTheBirdsFly: letTheBirdsFly,
        stopTheBirdsFlying: stopTheBirdsFlying,
        letTheHeartBeat: letTheHeartBeat,
        stopTheHeartBeating: stopTheHeartBeating
    }


    return (
        <AnimationContext.Provider value={data}>
            {children}
        </AnimationContext.Provider>
    )
}


export default AnimationContextProvider;