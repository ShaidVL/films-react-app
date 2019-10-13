import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import FilmSearch from "./components/FilmSearch";
import FilmCard from "./components/FilmCard";

function App() {
    return (
        <div className='main-container'>
            <Switch>
                <Route exact path='/' component={FilmSearch}/>
                <Route path='/film/:id' component={FilmCard}/>
            </Switch>
        </div>

    );
}

export default App;