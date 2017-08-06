import { LOAD_BOOK } from './actionTypes';

export const books = (books) => {
    return {
        type: LOAD_BOOK,
        books
    }
}