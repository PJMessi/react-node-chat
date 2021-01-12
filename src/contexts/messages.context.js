import { createContext, useContext, useReducer } from "react";
import { initialState, messageReducer } from "../reducers/message.reducer";

const MessageContext = createContext();

export const useMessageContext = () => {
    const context = useContext(MessageContext);
    if (!context) throw new Error('This component is not wrapped with Message Context.');

    return context;
}

export const MessageContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(messageReducer, initialState);

    return <MessageContext.Provider value={{messageState: state, messageDispatch: dispatch}}>
        {children}
    </MessageContext.Provider>
}