export const userReducer = (state, action) => {

    switch(action.type) {
        case 'REQUEST_USERS_FETCH':
            return {
                ...state,
                loading: true
            }

        case 'USERS_FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.payload.users
            }

        case 'USERS_FETCH_ERROR':
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
    users: ''
}