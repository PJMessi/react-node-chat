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

        case 'INSERT_MESSAGE':
            return {
                ...state,
                messages: [action.payload.message, ...state.messages],
                paginationData: {
                    count: state.paginationData.count + 1,
                    lastPage: state.paginationData.lastPage,
                    currentPage: state.paginationData.currentPage,
                    from: state.paginationData.from,
                    perPage: state.paginationData.perPage + 1,
                    to: state.paginationData.to + 1
                }
            };

        default:
            throw new Error(`Invalid action type: ${action.type}.`);
    }

}

export const initialState = {
    loading: false,
    messages: '',
    paginationData: ''
}