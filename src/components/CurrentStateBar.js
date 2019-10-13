import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_DISPLAYED_TAB} from '../actions/ActionTypes';
import './style/style.css';

function CurrentStateBar(props) {
    const value = useSelector(state => state.filmList);
    const currentDisplayedTab = value.displayedTab;
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.displayedTab = JSON.stringify(currentDisplayedTab);
        const displayedTabBtn = document.getElementById(currentDisplayedTab);
        displayedTabBtn.classList.add('state-bar-btn-pressed');
        const notDisplayedTab = currentDisplayedTab === 'films' ? 'bookmarks' : 'films';
        const notDisplayedTabBtn = document.getElementById(notDisplayedTab);
        notDisplayedTabBtn.classList.remove('state-bar-btn-pressed');
    });

    const handleTabChange = (event) => {
        const replaceTab = event.currentTarget.id;
        if (currentDisplayedTab !== replaceTab)
            dispatch({type: CHANGE_DISPLAYED_TAB, tabName: replaceTab});
    };

    return (
        <div className='state-bar-container'>
            <div hidden={!props.hidden} className='search-result-text'>Результаты поиска</div>
            <div hidden={props.hidden}>
                <button id='films' className='state-bar-btn state-bar-btn-pressed' onClick={handleTabChange}>Все фильмы
                </button>
                <button id='bookmarks' className='state-bar-btn ' onClick={handleTabChange}>Закладки</button>
            </div>

        </div>
    );
}

export default CurrentStateBar;