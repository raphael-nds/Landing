import React, {useState} from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { TiThMenu} from 'react-icons/ti';
import {GoX} from 'react-icons/go';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)

    return(
        <nav className="navbar">
            <Link to="#" className="logo"><h1 className="logo-h1">Logomarca</h1></Link>
            
            <ul className={isMobile ? "nav-itens-mobile" :  "nav-links"}
            onClick={() => setIsMobile(false)}>
                <Link to="" className="op">
                    <li>Início</li>
                </Link>
                <Link to="" className="op">
                    <li>Container</li>
                </Link>
                <Link to="" className="op">
                    <li>Carousel</li>
                </Link>
                <Link to="" className="op">
                    <li>Depoimentos</li>
                </Link>
                <Link to="" className="op">
                    <li>Footer</li>
                </Link>
            </ul>

                <Link  to="/Login" className="op-login">
                    <li className="op-log">Login</li>
                </Link>
                
            <button  className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}>
                {
                    isMobile ? (<GoX className="icon-menu"/>)
                    : (<TiThMenu className="icon-menu"/>)
                }

            </button>
        </nav>
    );
}

export default Navbar;