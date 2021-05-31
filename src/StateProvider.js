
import React,{createContext,useContext,useReducer} from "react";

//preparing the dataLayer

export const StateContext = createContext();

//wrapping theapp and providing the dataLayer

export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//pulling information from the dataLayer
export const useStateValue = ()=>useContext(StateContext);
