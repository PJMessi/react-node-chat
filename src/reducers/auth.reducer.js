export const authReducer = (state, action) => {
    
    switch(action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...state,
                loading: true
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token,
                error: {}
            }

        case 'LOGIN_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            }



        case 'LOGOUT':
            return {
                ...state,
                loading: false,
                user: '',
                token: ''
            }



        case 'REQUEST_PROFILE_FETCH':
            return {
                ...state,
                loading: true
            }

        case 'PROFILE_FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case 'PROFILE_FETCH_ERROR':
            return {
                ...state,
                loading: false
            }


        default: 
            throw new Error(`Invalid action type: ${action.type}.`);
    }

}

export const initialState = {
    user: (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) || '',
    token: localStorage.getItem('token') || '',
    loading: false,
    error: {}
};