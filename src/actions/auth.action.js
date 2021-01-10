import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const login = async(dispatch, { email, password }) => {

    dispatch({type: 'REQUEST_LOGIN'});
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
      
        const { user, token } = response.data.data;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        dispatch({type: 'LOGIN_SUCCESS', payload: {user, token} });

    } catch (error) {
        console.log(error);
        dispatch({type: 'LOGIN_ERROR', error: error.response.data });
        throw error;
    }

}