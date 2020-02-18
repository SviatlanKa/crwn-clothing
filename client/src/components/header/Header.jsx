import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/user-actions';
import { createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import './Header.scss';


const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/">CONTACTS</Link>
           {
                currentUser ?
                    <div className="option" onClick={signOutStart}>SIGN OUT</div>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);