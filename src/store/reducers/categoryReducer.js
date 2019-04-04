import {FETCH_CATEGORIES_SUCCESS} from "../actions/categoriesActions";

const initialSate = {
    categories: []
};

const categoriesReducer = (state = initialSate, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.categories
            };
        default:
            return state;
    }
};

export default categoriesReducer;
