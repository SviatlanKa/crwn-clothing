import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase-utils';
import './Header.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <div className="logo-container">
            <Logo />
        </div>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/">CONTACTS</Link>
           {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                : <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;