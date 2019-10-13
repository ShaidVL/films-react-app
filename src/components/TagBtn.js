import React from 'react';
import {useDispatch} from "react-redux";
import { ADD_OR_REMOVE_TAG_SEARCH } from '../actions/ActionTypes';

import './style/style.css';

function TagBtn(props) {
    const dispatch = useDispatch();
    const tag = props.tag;
    const handleTagClick = event => {
        console.dir(event.target.textContent);
        dispatch({type: ADD_OR_REMOVE_TAG_SEARCH, tagName: event.target.textContent});
    };
    return <button className='tag-btn' onClick={handleTagClick}>#{tag}</button>;
}

export default TagBtn;