import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const login = (dispatch, { email, password }) => {

    dispatch({type: 'REQUEST_LOGIN'});
    try {
        const response = axios.post(`${API_BASE_URL}/auth/login`, { email, password });

        const { user, token } = response;

        localStorage.setItem('token', token);
        localStorage.setItem('user', user);

        dispatch({type: 'LOGIN_SUCCESS'}, { payload: {user, token} });

    } catch (error) {
        dispatch({type: 'LOGIN_ERROR'}, { error })
    }

}