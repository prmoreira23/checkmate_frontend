import { login } from './adapter'
const SERVER = "http://localhost:3000";
const BASE_URL = `${SERVER}/api/v1/`;

export const userLogin = (credentials) => {
  return (dispatch) => {
    login(credentials)
    .then(result => {
      localStorage.token = result.token;
      dispatch(setUser(result));
    });
  }
}

export const getUser = (token) => {
  return (dispatch) => {
    fetch(BASE_URL+"current_user", {
      headers: {
        'Content-Type': 'application/json',

      },
      method: "POST",
      body: JSON.stringify(token)
    }).then(res => res.json())
    .then(result => {
      dispatch(setUser(result));
    });
  }
}

export const setUser = (token) => {
  return {
      type: "SET_USER",
      payload: token
  }
}

export const unsetUser = () => {
  return {
      type: "UNSET_USER"
  }
}
