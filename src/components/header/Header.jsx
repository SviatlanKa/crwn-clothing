import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <Logo />
        </div>
        <div className="options">
            <div className="option">
                <Link to="/shop">
                    SHOP
                </Link>
            </div>
            <div className="option">
                <Link to="/">
                    CONTACTS
                </Link>
            </div>
            <div className="option">
                <Link to="/signin">
                    SIGN IN
                </Link>
            </div>
        </div>
    </div>
);

export default Header;