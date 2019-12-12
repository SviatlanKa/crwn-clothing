import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden}/>
        <span className="item-count">{itemsCount}</span>
    </div>
);

const mapStateToProps = state => ({
    itemsCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);