import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Calls API to fetch users.
 * Updates the user state.
 * @param {*} dispatch 
 */
export const fetchUsers = async (dispatch) => {
    dispatch({ type: 'REQUEST_USERS_FETCH' });

    try {
        const response = await axios.get(`${API_BASE_URL}/users`);

        const { data: users } = response.data;

        dispatch({type: 'USERS_FETCH_SUCCESS', payload: { users }});

    } catch (error) {
        dispatch({ type: 'USERS_FETCH_ERROR' });
        throw error;
    }
}

/**
 * Updates the status of the user in state.
 * @param {*} dispatch 
 * @param {*} user 
 */
export const updateUserStatus = (dispatch, user) => {
    dispatch({ type: 'UPDATE_USER_STATUS', payload: { user } });
}

/**
 * Calls API to create new user.
 * Update the state.
 * @param {*} dispatch 
 * @param {*} param1 
 */
export const createUser = async (dispatch, { email, name, password, passwordConfirmation }) => {
    dispatch({ type: 'REQUEST_USER_CREATE' });

    try {
        // const response = await axios.post(`${API_BASE_URL}/users`);
        // const { data: user } = response.data;

        await axios.post(`${API_BASE_URL}/users`, {
            email, name, password, password_confirmation: passwordConfirmation
        });

        dispatch({type: 'USER_CREATE_SUCCESS'})

    } catch (error) {
        dispatch({ type: 'USER_CREATE_ERROR', error: error.response.data });
        throw error;
    }
}