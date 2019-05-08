import { ERROR } from "../actions/types";

const DEFAULT_STATE = {
  err: ''
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case ERROR:
      return {
        ...state,
        err: action.payload
      }
    default:
      return state;
  }
}