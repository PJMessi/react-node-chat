import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

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

        dispatch({type: 'USERS_FETCH_SUCCESS', payload: { users }})

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