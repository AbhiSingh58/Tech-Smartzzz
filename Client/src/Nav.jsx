import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
    return <>
        <div className="nav">
            <div className="logo"><strong style={{ textDecoration: "" }} to='/'>TECHSmartzz</strong></div>
            <div className="navs">
                <NavLink to="/" className="navsa active">Home</NavLink>
                <NavLink to="/services" className="navsa active">Services</NavLink>
                {/* <NavLink to="/about" className="navsa active">About</NavLink> */}
                <NavLink to="/contact" className="navsa active">Contact</NavLink>
            </div>
            <div className="hambr">
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle fullhm" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        <MenuIcon className="hamburger" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to="/" className="navsa active">Home</NavLink><br /><hr />
                        <NavLink to="/services" className="navsa active">Services</NavLink><br /><hr />
                        {/* <NavLink to="/about" className="navsa active">About</NavLink><br /><hr /> */}
                        <NavLink to="/contact" className="navsa active">Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Nav;