import {combineReducers} from 'redux';
//import {routerReducer} from 'react-router-redux';

import FilmListReducer from './FilmListReducer'

const RootReducer = combineReducers({
    //routing: routerReducer,
    filmList: FilmListReducer,
});

export default RootReducer;