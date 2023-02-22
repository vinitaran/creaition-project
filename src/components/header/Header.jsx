import React from 'react';
import './Header.css';
import headerLogo from "../../images/logo/creaition_logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <div className="header">
        <div className="header__main__container">
        <div className="header__container" > 
        <div className="header__container__image">
            <a href='/'>
                <img src={headerLogo} alt="header__logo" className="header__logo"></img>
            </a>
        </div>
        <div className="header__container__nav">
            <div className="header__container__nav__feed">
            <Link>feed</Link>
            </div>
            <div className="header__container__nav__boards">
            <Link>boards</Link>
            </div>
            <div className="header__container__nav__profile">
            <Link>profile</Link>
            </div>
            <div className="header__container__nav____about">
            <Link>about</Link>
            </div>
            
        </div>
    </div>
        </div>
    </div>

    
  )
}

export default Header