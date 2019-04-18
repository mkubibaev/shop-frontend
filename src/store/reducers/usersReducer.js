import {REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS} from "../actions/usersActions";

const initialState = {
    registerError: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                registerError: null
            };

        case REGISTER_USER_FAILURE:
            return {
                ...state,
                registerError: action.error
            };
        default:
            return state
    }
};

export default usersReducer;
