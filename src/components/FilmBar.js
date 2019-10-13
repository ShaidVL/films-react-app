import React from 'react';
import {Link} from "react-router-dom";
import {ADD_OR_REMOVE_BOOKMARK} from '../actions/ActionTypes';

import './style/style.css';
import bookmarkIcon from './resource/bookmark.png';
import bookmarkFilledIcon from './resource/bookmarkfilled.png';

import TagBtn from './TagBtn';
import {useDispatch} from "react-redux";

function FilmBar(props) {
    const dispatch = useDispatch();
    const filmId = props.film.id;
    const filmName = props.film.title;
    const filmTags = props.film.tags.map((tag, index) => <TagBtn tag={tag} key={index}/>);
    const bookmarkAdded = props.film.bookmarkAdded;


    const path = '/film/' + filmId;

    const handleChangeBookmark = event => {
        dispatch({type: ADD_OR_REMOVE_BOOKMARK, filmId: event.currentTarget.id});
    };
    return (
        <div className='film-bar-container'>
            <div className='col-film-name'>
                <p>
                    <Link to={path}>
                        {filmName}
                    </Link>
                </p>
            </div>
            <div className='col-film-tags'>{filmTags}</div>
            <div className='col-bookmark-btn'>
                <button className='bookmark-btn' id={filmId} onClick={handleChangeBookmark}>
                    <img className='icon-search' src={bookmarkAdded ? bookmarkFilledIcon : bookmarkIcon}
                         alt={bookmarkAdded ? 'Удалить из закладок' : 'Добавить в закладки'}/>
                </button>
            </div>

        </div>
    );
}

export default FilmBar;