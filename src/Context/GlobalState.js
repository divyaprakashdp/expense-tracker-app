import React,{createContext, useContext, useReducer} from "react";
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    transactions: [
        {id:1, text:'Flower', amount:-23},
        {id:2, text:'Spa', amount:-23},
        {id:3, text:'Book', amount:-23},
        {id:4, text:'Grocery', amount:-23}
    ]
}

//CReate context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({children}) =>{
        const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={{transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )
}