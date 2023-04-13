import React from 'react';
import "./Nav.css";
import NavMenu from "./NavMenu";
import NavMobileMenu from "./NavMobileMenu";

function Nav() {

    return (
        <div>
            <NavMobileMenu/>
            <NavMenu/>
        </div>
    );
}

export default Nav;
