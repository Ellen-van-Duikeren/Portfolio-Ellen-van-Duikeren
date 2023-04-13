import React from 'react';
import "./Nav.css";
import NavLinks from "./NavLinks";

const NavMenu = () => {
    return (
        <nav className="navigation">
            <NavLinks />
        </nav>
    );
};

export default NavMenu;