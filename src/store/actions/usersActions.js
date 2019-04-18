import axios from '../../axios-api';
import {push} from 'connected-react-router';
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const registerUserSuccess = () => ({type: REGISTER_USER_SUCCESS});
export const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});

export const registerUser = userData => {
    return async dispatch => {
        try {
            await axios.post('/users', userData);

            dispatch(registerUserSuccess());
            dispatch(push('/'));
        } catch (error) {

            if (error.response && error.response.data) {
                dispatch(registerUserFailure(error.response.data));
            } else {
                dispatch(registerUserFailure('No internet!'));
            }

        }
    };
};
