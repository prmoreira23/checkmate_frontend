import data from '../initialState.json'

export const ContractReducer = (state = {incoming_contracts: [], outcoming_contracts: [], current_contract: null}, action) => {
  switch(action.type){
    case "GET_INCOMING_CONTRACTS":
      return {
        ...state,
          incoming_contracts: action.payload
      }
    case "GET_OUTCOMING_CONTRACTS":
      return {
        ...state,
          outcoming_contracts: action.payload
      }
    case "SET_CURRENT_CONTRACT":
      return {
        ...state,
          current_contract: action.payload
      }
    case "CHANGE_CONTRACT":
      return {
        ...state,
          current_contract: {...action.payload},
          outcoming_contracts: state.outcoming_contracts.map(contract => contract.id == action.payload.id ? action.payload : contract),
          incoming_contracts: state.incoming_contracts.map(contract => contract.id == action.payload.id ? action.payload : contract)
      }
    default:
      return state
  }
}

export default ContractReducer;
