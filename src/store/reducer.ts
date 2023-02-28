//import { actionTypes } from './reducer';
export interface IState{
  token: string,
}

export const initialState = {
  token: null,
};

export enum actionTypes  {
  SET_TOKEN= "SET_TOKEN"
}


export type IAction =
  | {
    type: actionTypes.SET_TOKEN,
    value: any
  };


  
const reducer = (state: IState, action: IAction) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.value };

    default:
      return state;
  }
};

export default reducer;