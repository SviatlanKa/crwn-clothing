import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import HomePage from './pages/homepage/HomePage';
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUpPage from './pages/sign-in-sign-up/SignInAndSignUpPage';
import './App.css';

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage}/>
            <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
    </div>
  );
}

export default App;
