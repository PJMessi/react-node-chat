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
                errors: {}
            }

        case 'LOGIN_ERROR':
            return {
                ...state,
                loading: false,
                errors: action.errors
            }

        case 'LOGOUT':
            return {
                ...state,
                loading: false,
                user: '',
                token: ''
            }

        default: 
            throw new Error(`Invalid action type: ${action.type}.`);
    }

}

export const initialState = {
    user: localStorage.getItem('user') || '',
    token: localStorage.getItem('token') || '',
    loading: false,
    errors: {}
};