import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import HomePage from './pages/homepage/HomePage';
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUpPage from './pages/sign-in-sign-up/SignInAndSignUpPage';
import { auth } from "./firebase/firebase-utils";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/signin" component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }


}

export default App;
