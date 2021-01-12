import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

/**
 * Calls API to fetch authentication token and user.
 * Updates the local storage.
 * Adds default Authorization header in axios.
 * Updates the state.
 * @param {*} dispatch 
 * @param {*} param1
 */
export const login = async(dispatch, { email, password }) => {

    dispatch({type: 'REQUEST_LOGIN'});
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
      
        const { user, token } = response.data.data;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        dispatch({type: 'LOGIN_SUCCESS', payload: {user, token} });

    } catch (error) {
        dispatch({type: 'LOGIN_ERROR', error: error.response.data });
        throw error;
    }

}

/**
 * Deletes local storage keys.
 * Removes Authorization header from axios.
 * Updates state.
 * @param {*} dispatch 
 */
export const logout = (dispatch) => {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');

    delete axios.defaults.headers.common['Authorization'];

    dispatch({type: 'LOGOUT'});
}

/**
 * Calls API to fetch profile of the auth user.
 * Updates the local storage.
 * Updates state.
 * @param {*} dispatch 
 */
export const fetchProfile = async (dispatch) => {
    dispatch(({type: 'REQUEST_PROFILE_FETCH'}));

    try {
        const response = await axios.get(`${API_BASE_URL}/auth/profile`);

        const user = response.data.data;

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(({type: 'PROFILE_FETCH_SUCCESS', payload: {user}}));

    } catch (error) {
        dispatch(({type: 'PROFILE_FETCH_ERROR'}));
        throw error;
    }
}