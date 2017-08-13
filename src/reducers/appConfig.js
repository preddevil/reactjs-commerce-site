import { ADD_TO_BASKET } from '../actions/actionTypes';

let initialState = {
    navigationItems: [{
            id: 1,
            name: "Programming"
        },
        {
            id: 2,
            name: "Self-help"
        },
        {
            id: 3,
            name: "Cooking"
        },
        {
            id: 4,
            name: "Suspense"
        }
    ],
    numOfProductsInBasket: 0
}

export const appConfig = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return Object.assign({}, state, {
                numOfProductsInBasket: ++state.numOfProductsInBasket
            })
        default:
            return state
    }
}