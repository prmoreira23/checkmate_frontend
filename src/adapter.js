const SERVER = "http://localhost:3000";
const BASE_URL = `${SERVER}/api/v1/`;

const login = (credentials) => {
  return fetch(BASE_URL+"auth", {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(credentials)
  }).then(res => res.json())
}

const getCurrentUser = (token) => {
  return fetch(BASE_URL+"current_user", {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    },
    method: "GET"
  }).then(res => res.json())
}

const getInContracts = (token) => {
  return fetch(BASE_URL+"contracts/incoming", {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    },
    method: "GET"
  }).then(res => res.json())
}

const getOutContracts = (token) => {
  console.log(token, "INSIDE adpter");
  return fetch(BASE_URL+"contracts/outcoming", {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    },
    method: "GET"
  }).then(res => res.json())
}

const signup = (user) => {
  return fetch(BASE_URL+"users", {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(user)
  }).then(res => res.json())
}

export { login, signup, getCurrentUser, getInContracts, getOutContracts }
