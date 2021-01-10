import { createContext, useContext, useReducer } from 'react';
import { authReducer, initialState } from '../reducers/auth.reducer';

const AuthContext = createContext();

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error('This component is not wrapped with Auth Context.');

    return context;
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return <AuthContext.Provider value={ { state, dispatch } }>
        {children}
    </AuthContext.Provider>
}