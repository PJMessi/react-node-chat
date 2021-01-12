export const messageReducer = (state, action) => {

    switch(action.type) {
        case 'REQUEST_MESSAGE_FETCH':
            return {
                ...state,
                loading: true
            }

        case 'MESSAGE_FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                messages: action.payload.messages,
                paginationData: action.payload.paginationData
            }

        case 'MESSAGE_FETCH_ERROR':
            return {
                ...state,
                loading: false
            }

        default:
            throw new Error(`Invalid action type: ${action.type}.`);
    }

}

export const initialState = {
    loading: false,
    messages: '',
    paginationData: ''
}