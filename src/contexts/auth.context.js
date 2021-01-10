import { createContext, useContext } from 'react';

const AuthContext = createContext();

export default useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error('This component is not wrapped with Auth Context.');

    return context;
}