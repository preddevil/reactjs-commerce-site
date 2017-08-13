import { LOAD_BOOK } from '../actions/actionTypes'

let initialState = [{
    id: 1,
    name: 'Book 1'
}, {
    id: 2,
    name: 'Book 2'
}, {
    id: 3,
    name: 'Book 2'
}, {
    id: 4,
    name: 'Book 2'
}, {
    id: 5,
    name: 'Book 2'
}, {
    id: 6,
    name: 'Book 2'
}]

export const books = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BOOK:
            return [
                ...state,
                action.books
            ]
        default:
            return state
    }
}