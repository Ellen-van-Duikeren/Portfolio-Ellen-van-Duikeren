import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import NavAnimation from "./NavAnimation";
import {Context} from "../../context/Context";

const NavLinks = ({isMobile, closeMobileMenu}) => {

    const [animation, toggleAnimation] = useState(false);
    const {flying, stopTheBirdsFlying} = useContext(Context);

    return (
        <>
            <ul>

                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/"
                         onClick={() => isMobile && closeMobileMenu()}>
                    <li>Home</li>
                </NavLink>

                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/aboutMe"
                         onClick={() => isMobile && closeMobileMenu()}>
                    <li>Over mij</li>
                </NavLink>

                {/*<NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}  to="/cv"
                        onClick={() => isMobile && closeMobileMenu()}>*/}
                {/*    <li>Mijn CV</li>*/}
                {/*</NavLink>*/}

                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/projects"
                         onClick={() => isMobile && closeMobileMenu()}>
                    <li>Projecten</li>
                </NavLink>

                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/blog"
                         onClick={() => isMobile && closeMobileMenu()}>
                    <li>Blog</li>
                </NavLink>

                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/contact"
                         onClick={() => isMobile && closeMobileMenu()}>
                    <li>Contact</li>
                </NavLink>

                {/*<NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/rain"*/}
                {/*         onClick={() => isMobile && closeMobileMenu()}>*/}
                {/*    <li>Let it rain</li>*/}
                {/*</NavLink>*/}

                {/*<NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/onePagePortfolio"*/}
                {/*         onClick={() => isMobile && closeMobileMenu()}>*/}
                {/*    <li>One-page-portfolio</li>*/}
                {/*</NavLink>*/}

                <div className="button-animations">
                    <label className="toggle">
                        <input
                            className="toggle-checkbox"
                            type="checkbox"
                            onClick={() => {
                                isMobile && closeMobileMenu()
                                toggleAnimation(!animation)
                                {flying && stopTheBirdsFlying()}
                            }}
                        />
                        <div className="toggle-switch"></div>
                        <span className="toggle-label">Animaties</span>
                    </label>
                </div>

            </ul>

            <div>
                {animation && <NavAnimation/>}
            </div>
        </>
    );
};

export default NavLinks;