import React from 'react';
import "./Nav.css";
import {NavLink} from "react-router-dom";

function Nav() {

    return (
        <nav>
            <ul className="nav__ul">
                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/about-me">
                    <li>Over mij</li>
                </NavLink>
                {/*<NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}  to="/cv">*/}
                {/*    <li>Mijn CV</li>*/}
                {/*</NavLink>*/}
                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/projects">
                    <li>Projecten</li>
                </NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/blog">
                    <li>Blog</li>
                </NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/contact">
                    <li>Contact</li>
                </NavLink>

                <label className="toggle">
                    <input className="toggle-checkbox" type="checkbox"/>
                        <div className="toggle-switch"></div>
                        <span className="toggle-label">Animaties</span>
                </label>

            </ul>
        </nav>
    );
}

export default Nav;
