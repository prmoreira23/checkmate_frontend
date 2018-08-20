import data from '../initialState.json'

export const ErrorReducer = (state = {message: null, pathname: null}, action) => {
  switch(action.type){
    case "SET_ERROR":
      return {
        ...state,
          message: action.payload.message,
          pathname: action.payload.pathname
      }
    case "UNSET_ERROR":
      return {
          message: null,
          pathname: null
      }
    default:
      return state
  }
}

export default ErrorReducer;
