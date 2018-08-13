import data from '../initialState.json'

export const AuthReducer = (state = {token: null}, action) => {
  console.log("THIS IS DATA", data)
  switch(action.type){
    case "SET_USER":
      console.log("SET_USER/ REDUCER:", action.payload.token)
      return {
          token: action.payload.token
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
