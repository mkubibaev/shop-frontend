import axios from '../../axios-api';
import {push} from 'connected-react-router';
import {NotificationManager} from 'react-notifications';

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const LOGOUT_USER = "LOGOUT_USER";

export const registerUserSuccess = () => ({type: REGISTER_USER_SUCCESS});
export const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});

export const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
export const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});

export const logoutUser = () => {
    return async (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};

        try {
            const response = await axios.delete('/users/sessions', config);
            dispatch({type: LOGOUT_USER});
            NotificationManager.success(response.data.message);
        } catch (e) {
            NotificationManager.error('Could not logout!');
        }
    }
};

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
