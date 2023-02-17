import * as actionType from "./action";

const initialState = {
    ingredients: {
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    bacon: 0.3,
    salad: 0.6,
    cheese: 0.8,
    meat: 1.3
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: +state.ingredients + 1,
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]

            }
            break;
        case actionType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: +state.ingredients + 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        default:
            break;
    }
}

export default reducer;