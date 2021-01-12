import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const fetchMessages = async (dispatch) => {
    dispatch({type: 'REQUEST_MESSAGE_FETCH'})
    try {
        const response = await axios.get(`${API_BASE_URL}/messages`);

        const { rows: messages, ...paginationData } = response.data.data;

        dispatch({type: 'MESSAGE_FETCH_SUCCESS', payload: { messages, paginationData }})

    } catch (error) {
        dispatch({type: 'MESSAGE_FETCH_ERROR'})
        throw error;
    }
}