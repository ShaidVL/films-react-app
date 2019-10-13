import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Magnifier from './resource/magnifier.png'
import './style/style.css';
import TagBtn from "./TagBtn";
import { SEARCH_INPUT_TEXT_CHANGE } from '../actions/ActionTypes';

function SearchBar() {
    const value = useSelector(state => state.filmList);
    const dispatch = useDispatch();

    const handleTextChange = event => {
        dispatch({type: SEARCH_INPUT_TEXT_CHANGE, text: event.target.value});
    };
    const tagBar = value.searchTags.map((tag, index) => <TagBtn tag={tag} key={index}/>)
    return (
        <div>
            <div className='input-group'>
                <input
                className='input-search'
                type="text"
                placeholder="Текст поиска"
                value={value.searchInputValue}
                onChange={handleTextChange}/>
                <button
                    type="button"
                    className='btn-search'>
                    <img
                        className='icon-search'
                        src={Magnifier} alt='Поиск'/>
                </button>
            </div>
            <div className='tag-bar'>{tagBar}</div>
        </div>
    );
}

export default SearchBar;