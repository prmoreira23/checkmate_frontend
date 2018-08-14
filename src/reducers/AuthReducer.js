import data from '../initialState.json'

export const AuthReducer = (state = {token: null, current_user: null}, action) => {
  switch(action.type){
    case "SET_USER":
      console.log("SET_USER/ REDUCER:", action.payload.token)
      return {
        ...state,
          token: action.payload.token
      }
    case "SET_CURRENT_USER":
    console.log("SET_CURRENT_USER", action.payload.user);
      return {
        ...state,
          current_user: action.payload.user
      }
    case "UNSET_USER":
      return {
          token: null
      }
    default:
      return state
  }
}

export default AuthReducer;
