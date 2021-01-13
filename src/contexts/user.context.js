import { createContext, useContext, useReducer } from "react";
import { initialState, userReducer } from "../reducers/user.reducer";

const UserContext = createContext();

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('This component is not wrapped with User Context.');

    return context;
}

export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return <UserContext.Provider value={{userState: state, userDispatch: dispatch}}>
        {children}
    </UserContext.Provider>
}