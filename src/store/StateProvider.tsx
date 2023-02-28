import React, { createContext, useContext, useReducer, FC, useState, ReactElement } from "react";

import reducer, { initialState, IState } from "./reducer";

// const contextDefaultValues:LoginContextState = {
//   isLoggedIn: false,
//   client: "",
//   user:"",
// }
interface StateProps {
  children: ReactElement,
  initialState: (IState | any),
  reducer: (IState | any),
}

export const StateContext = createContext<IState | any>(initialState);

export const StateProvider = ( {reducer, children, initialState }: StateProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
}
export const useStateValue = () => useContext(StateContext);
