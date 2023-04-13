import React, {useState} from 'react';
import "./Nav.css";
import NavLinks from "./NavLinks";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineCloseCircle} from "react-icons/ai";

const NavMobileMenu = () => {

    const [open, toggleOpen] = useState(false);
    const hamburgerIcon = <GiHamburgerMenu
        className="hamburgerOpen"
        size="40px"
        onClick={() => toggleOpen(!open)}
    />

    const closeIcon = <AiOutlineCloseCircle
        className="hamburgerClose"
        size="40px"
        onClick={() => toggleOpen(!open)}
    />

    const closeMobileMenu = () => toggleOpen(false);

    return (
        <nav className="mobileNavigation">
                {open ? closeIcon : hamburgerIcon}
                {open && <NavLinks className="dropdownMenu" isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    );
};

export default NavMobileMenu;