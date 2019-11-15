import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from "./pages/shop/ShopPage";
import './App.css';

const HatsPage = (props) => {
    console.log(props);
    return (
        <div>
        <h1>This is Hats Page</h1>
    </div>
)}

function App() {
  return (
    <div>
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
