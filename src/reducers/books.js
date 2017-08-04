import { LOAD_BOOK } from '../actions/actionTypes'

export const books = (state, action) => {
    switch (action.type) {
        case LOAD_BOOK:
            return [
                ...state,
                action.books
            ]
    }
}