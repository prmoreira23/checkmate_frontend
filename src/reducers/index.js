import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer'
import ContractReducer from './ContractReducer'
import data from '../initialState.json'

// export const reducer = (state = data, action) => {
//   switch(action.type){
//     case "USER_LOGIN":
//       console.log("REDUCER:", action.payload)
//     default:
//       return state
//   }
// }

export default combineReducers({
  auth: AuthReducer,
  contracts: ContractReducer,
  errors: ErrorReducer
})
