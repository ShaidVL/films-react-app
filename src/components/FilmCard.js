import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_OR_REMOVE_BOOKMARK} from "../actions/ActionTypes";

import arrowBtn from './resource/arrow.png'
import {Link} from "react-router-dom";

function FilmCard(props) {
    const filmList = useSelector(state => state.filmList);
    const dispatch = useDispatch();

    const filmId = props.match.params.id;
    const filmName = filmList.Films.find(film => film.id === filmId).title;
    const bookmarkAdded = !!filmList.bookmarks.find(bookmark => bookmark === filmId);

    const handleChangeBookmark = () => {
        dispatch({type: ADD_OR_REMOVE_BOOKMARK, filmId: filmId});
    };

    return (
        <div>
            <Link to='/'>
                <button className='back-btn'>
                    <img src={arrowBtn} alt="Назад"/>
                    <span>Назад</span>
                </button>
            </Link>
            <div className='film-card'>
                <div className='film-logo'></div>
                <div>
                    <h1>{filmName}</h1>
                    <button className='big-btn'
                            onClick={handleChangeBookmark}>{bookmarkAdded ? 'Удалить из закладок' : 'Добавить в закладки'}</button>
                </div>
            </div>
        </div>


    );
}

export default FilmCard;