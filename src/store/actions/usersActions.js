import axios from '../../axios-api';
import {push} from 'connected-react-router';

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const LOGOUT_USER = "LOGOUT_USER";

export const registerUserSuccess = () => ({type: REGISTER_USER_SUCCESS});
export const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});

export const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
export const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});

export const logoutUser = () => ({type: LOGOUT_USER});

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
                dispatch(registerUserFailure({global: 'No connection'}));
            }

        }
    };
};

export const loginUser = userData => {
    return dispatch => {
        return axios.post('/users/sessions', userData).then(
            response => {
                dispatch(loginUserSuccess(response.data.user));
                dispatch(push('/'));
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(loginUserFailure(error.response.data));
                } else {
                    dispatch(loginUserFailure({global: 'No connection'}));
                }
            }
        )

    }
};
