export const paymentReducer = (state, action) => {

    switch(action.type) {
        case 'REQUEST_FETCH_PAYMENTINTENT':
            return {
                ...state,
                loading: true
            };

        case 'FETCH_PAYMENTINTENT_SUCCESS':
            return {
                state,
                loading: true,
                clientSecret: action.payload.clientSecret
            }

        case 'FETCH_PAYMENTINTENT_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            };


        default: 
            throw new Error(`Invalid action type: ${action.type}.`);
    }

}

export const initialState = {
    loading: false,
    error: {},
    clientSecret: ''
};