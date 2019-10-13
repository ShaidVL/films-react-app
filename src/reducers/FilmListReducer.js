import {
    SHOW_MORE_FILMS,
    ADD_OR_REMOVE_BOOKMARK,
    CHANGE_DISPLAYED_TAB,
    SEARCH_INPUT_TEXT_CHANGE,
    ADD_OR_REMOVE_TAG_SEARCH,
    CLEAR_SEARCH_PARAMS,
} from '../actions/ActionTypes';

import films from '../films.json'

const userBookmarks = JSON.parse(localStorage.bookmarks || 0) || [];
const userDisplayedTab = JSON.parse(localStorage.displayedTab || 0) || 'films';

const initialState = {
    Films: films,
    showFilmsNum: 10,
    bookmarks: userBookmarks,
    displayedTab: userDisplayedTab,
    searchInputValue: '',
    searchTags: [],
};

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MORE_FILMS:
            const newFilmsNum = state.showFilmsNum + 10;
            return {...state, showFilmsNum: newFilmsNum};
        case ADD_OR_REMOVE_BOOKMARK:
            if (state.bookmarks.find(id => id === action.filmId)) {
                return {...state, bookmarks: state.bookmarks.filter(id => id !== action.filmId)}
            } else
                return {...state, bookmarks: [...state.bookmarks, action.filmId]};
        case CHANGE_DISPLAYED_TAB:
            return {...state, displayedTab: action.tabName};
        case SEARCH_INPUT_TEXT_CHANGE:
            return {...state, searchInputValue: action.text};
        case ADD_OR_REMOVE_TAG_SEARCH:
            if (state.searchTags.find(tag => tag === action.tagName.slice(1))) {
                return {...state, searchTags: state.searchTags.filter(tag => tag !== action.tagName.slice(1))}
            } else
                return {...state, searchTags: [...state.searchTags, action.tagName.slice(1)]};
        case CLEAR_SEARCH_PARAMS:
                return {...state, searchTags: [], searchInputValue: ''};
        default:
            return state;
    }
};

export default RootReducer;