import { createContext, useContext, useReducer } from "react";
import { paymentReducer, initialState } from "../reducers/payment.reducer";

const PaymentContext = createContext();

export const usePaymentContext = () => {
    const context = useContext(PaymentContext);
    if (!context) throw new Error('This component is not wrapped with Payment Context.');

    return context;
}

export const PaymentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(paymentReducer, initialState);

    return <PaymentContext.Provider value={{paymentState: state, paymentDispatch: dispatch}}>
        {children}
    </PaymentContext.Provider>
}