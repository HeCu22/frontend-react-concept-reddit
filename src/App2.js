import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import './App.css';


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

            </Switch>
        </Router>

    );
}

export default App;
