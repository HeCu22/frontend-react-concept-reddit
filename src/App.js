import React from 'react';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import {Switch, Route}
    from 'react-router-dom';

import './App.css';

function App() {
    return (
        <>
            <main className="inner-container">
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/subreddit/">
                            <h2>Andere pagina </h2>
                        </Route>
                        <Route path="/subreddit/:subreddit">
                            <Subreddit/>
                        </Route>

                    </Switch>

            </main>
        </>
    )
}

export default App;
