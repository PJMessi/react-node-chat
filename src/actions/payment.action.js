import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Makes request to create payment intent and fetch the client secret.
 */
export const createPaymentIntent = async (dispatch) => {
    dispatch({type: 'REQUEST_FETCH_PAYMENTINTENT'});

    try {
        const response = await axios.post(`${API_BASE_URL}/payments/paymentIntent`);

        const { clientSecret } = response.data.data;

        dispatch({type: 'FETCH_PAYMENTINTENT_SUCCESS', payload: { clientSecret }});

        return clientSecret;

    } catch (error) {
        dispatch({type: 'FETCH_PAYMENTINTENT_ERROR', error: error.response.data})
        throw error;
    } 
}