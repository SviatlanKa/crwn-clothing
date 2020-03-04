import { put, all, call, select, takeLatest } from 'redux-saga/effects';
import { getUserCartRef } from '../../firebase/firebase-utils';
import { selectCurrentUser } from '../user/user-selectors';
import { selectCartItems } from './cart-selectors';
import UserActionTypes from '../user/user-types';
import CartActionTypes from './cart-types';
import { clearCart, updateCartFromFirebase } from './cart-actions';

function* clearCartOnSignOut() {
    yield put(clearCart());
}

function* updateCartOnFirebase() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
        try {
            const cartItems = yield select(selectCartItems);
            const cartRef = yield call(getUserCartRef, currentUser.id);
            cartRef.set({ cartItems });
        } catch (error) {
            console.log(error.message);
        }
    }
}

function* checkCartFromFirebase({ payload: user }) {
    const cartRef = yield call(getUserCartRef, user.id);
    const snapshot = yield cartRef.get();
    const { cartItems } = snapshot.data();
    if (cartItems.length > 0) {
        yield put(updateCartFromFirebase(cartItems));
    } else yield updateCartOnFirebase();
}

function* onCartChanged() {
    yield takeLatest([
        CartActionTypes.ADD_ITEM,
        CartActionTypes.REMOVE_ITEM,
        CartActionTypes.CLEAR_ITEM_FROM_CART
    ], updateCartOnFirebase);
}

function* onSignInSuccess() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(onSignInSuccess),
        call(onCartChanged)
    ]);
}