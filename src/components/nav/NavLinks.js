import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinks = ({isMobile, closeMobileMenu}) => {

    return (
        <ul>
            <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/"
            onClick={() => isMobile && closeMobileMenu()}>
                <li>Home</li>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/about-me"
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

            {/*<label className="toggle">*/}
            {/*    <input className="toggle-checkbox" type="checkbox"/
                        onClick={() => isMobile && closeMobileMenu()}>*/}
            {/*        <div className="toggle-switch"></div>*/}
            {/*        <span className="toggle-label">Animaties</span>*/}
            {/*</label>*/}

        </ul>
    );
};

export default NavLinks;