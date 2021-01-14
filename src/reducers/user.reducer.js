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



        case 'UPDATE_USER_STATUS':
            let users = '';
            if (state.users !== '') {
                users = state.users.map(user => {
                    if (user.uuid === action.payload.user.uuid)
                        user.status = action.payload.user.status;
                    
                    return user;
                })
            }    
            return {
                ...state,
                users
            }


        case 'REQUEST_USER_CREATE':
            return {
                ...state,
                loading: true
            }

        case 'USER_CREATE_SUCCESS':
            return {
                ...state,
                loading: false,
                error: {}
            }

        case 'USER_CREATE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            throw new Error(`Invalid action type: ${action.type}.`);
    }

}

export const initialState = {
    loading: false,
    users: '',
    error: {}
}