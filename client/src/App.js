import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user-actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Header from "./components/header/Header";
import Spinner from './components/spinner/Spinner';
import './App.css';

const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-sign-up/SignInAndSignUpPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route exact path="/checkout" component={CheckoutPage} />
                        <Route
                            exact
                            path="/signin"
                            render={() =>
                                currentUser ? (
                                    <Redirect to="/" />
                                ) : (
                                    <SignInAndSignUpPage />
                                )
                            }
                        />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
