import { login, signup, getInContracts, getOutContracts } from './adapter'
const SERVER = "http://localhost:3000";
const BASE_URL = `${SERVER}/api/v1/`;

export const userLogin = (credentials) => {
  return (dispatch) => {
    login(credentials)
    .then(result => {
      localStorage.token = result.token;
      dispatch(setUser(result));
      dispatch(getUser(result));
    });
  }
}

export const userSignup = (user) => {
  return (dispatch) => {
    signup(user)
    .then(result => {
      console.log("TRYING TO LOGIN", user.user.email);
      dispatch(userLogin({email: user.user.email, password: user.user.password}))
    });
  }
}

export const getUser = (token) => {
  return (dispatch) => {
    fetch(BASE_URL+"current_user", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token.token
      },
      method: "GET"
    }).then(res => res.json())
    .then((user) => {
      console.log("GETUSER", user, token.token);
      dispatch(getOutcomingContracts(token.token));
      dispatch(getIncomingContracts(token.token));
      dispatch(setCurrentUser(user))
    });
  }
}

export const getIncomingContracts = (token) => {
  return (dispatch) => {
    getInContracts(token)
    .then((contracts) => {
      dispatch(setIncomingContracts(contracts.contracts))
    });
  }
}

export const setIncomingContracts = (contracts) => {
  return {
      type: "GET_INCOMING_CONTRACTS",
      payload: contracts
  }
}

export const getOutcomingContracts = (token) => {
  return (dispatch) => {
    getOutContracts(token)
    .then((contracts) => {
      dispatch(setOutcomingContracts(contracts.contracts))
    });
  }
}


export const setOutcomingContracts = (contracts) => {
  return {
      type: "GET_OUTCOMING_CONTRACTS",
      payload: contracts
  }
}

export const setUser = (token) => {
  return {
      type: "SET_USER",
      payload: token
  }
}

export const setCurrentContract = (contract) => {
  return {
      type: "SET_CURRENT_CONTRACT",
      payload: contract
  }
}

export const setCurrentUser = (user) => {
  return {
      type: "SET_CURRENT_USER",
      payload: user
  }
}

export const unsetUser = () => {
  return {
      type: "UNSET_USER"
  }
}
