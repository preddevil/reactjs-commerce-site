import { LOAD_BOOK, ADD_TO_BASKET } from './actionTypes';

export const books = (books) => {
    return {
        type: LOAD_BOOK,
        books
    }
}

export const addProductToBasket = (product) => {
    return {
        type: ADD_TO_BASKET,
        product
    }
}