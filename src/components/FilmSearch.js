import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {CLEAR_SEARCH_PARAMS} from '../actions/ActionTypes'

import SearchBar from './SearchBar';
import CurrentStateBar from './CurrentStateBar';
import FilmsList from './FilmsList';
import arrowBtn from './resource/arrow.png'

function FilmSearch() {
    const filmList = useSelector(state=> state.filmList);
    const dispatch = useDispatch();
    const backBtnHidden = !!filmList.searchInputValue || !!filmList.searchTags.length;

    const handleBackClick = () => {
        dispatch({type: CLEAR_SEARCH_PARAMS});
    };

    return (
        <div>
            <button hidden={!backBtnHidden} className='main-back-btn' onClick={handleBackClick}>
                <span><img src={arrowBtn} alt=""/>Назад</span>
            </button>
            <SearchBar/>
            <CurrentStateBar hidden={backBtnHidden}/>
            <FilmsList/>
        </div>

    );
}

export default FilmSearch;