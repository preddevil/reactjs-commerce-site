import { combineReducers } from 'redux';
import { books } from './books';
import { appConfig } from './appConfig';

const rootReducer = combineReducers({
    books,
    appConfig
})

export default rootReducer