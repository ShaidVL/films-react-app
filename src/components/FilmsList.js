import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import FilmBar from './FilmBar';
import './style/style.css';

function FilmsList() {
    const value = useSelector(state => state.filmList);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.bookmarks = JSON.stringify(value.bookmarks);
    });

    const filmsOnDisplayedTab = value.displayedTab === 'bookmarks' ?
        value.Films.filter(film => value.bookmarks.find(id => id === film.id)) :
        value.Films;
    const searchFilter = filmsOnDisplayedTab.filter(film =>
        film.title.toLowerCase().includes(value.searchInputValue.toLowerCase()));
    const searchTagFilter = value.searchTags.length ?
        searchFilter.filter(film => value.searchTags.every(searchTag =>
            film.tags.some(tag => searchTag === tag))) :
        searchFilter;
    const hiddenShowMoreBtn = value.showFilmsNum >= searchTagFilter.length;
    const showFilms = searchTagFilter.slice(0, value.showFilmsNum);

    const films = showFilms.map(film => {
        film.bookmarkAdded = !!value.bookmarks.find(id => id === film.id);
        return (<li className='film-bar-list-el' key={film.id}>
                <FilmBar film={film}/>
            </li>)
    });

    const handleShowMore = () => {
        dispatch({type: 'SHOW_MORE_FILMS'});
    };

    return (
        <div>
            <ul className='film-list'>{films}</ul>
            <button className='big-btn' hidden={hiddenShowMoreBtn} onClick={handleShowMore}>Показать еще</button>
        </div>
    );
}

export default FilmsList;