import React from 'react';
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase-utils';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import './Header.scss';

const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>
        {
            hidden ? null :
                <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);