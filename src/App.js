import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Header from "./components/header/Header";
import HomePage from './pages/homepage/HomePage';
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUpPage from './pages/sign-in-sign-up/SignInAndSignUpPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user-selectors';
import './App.css';

class App extends Component {

    unsubscribeFromAuth = null;

    componentDidMount() {

    //     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //         if(userAuth) {
    //             const userRef = await createUserProfileDocument(userAuth);
    //
    //             userRef.onSnapshot(snapshot => {
    //                     setCurrentUser({
    //                         id: snapshot.id,
    //                         ...snapshot.data()
    //                     })
    //             })
    //         } else setCurrentUser(userAuth);
    //     });
    //
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        console.log(this.props.currentUser);
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
