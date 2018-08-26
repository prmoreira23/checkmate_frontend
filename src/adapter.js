const SERVER = "https://floating-shelf-30008.herokuapp.com";
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

export const signContract = (token, contract_id) => {
  return fetch(BASE_URL+"sign_contract", {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token,
      id: contract_id
    },
    method: "POST"
  }).then(res => res.json())
}

export const getContractPdf = (id, token, contract) => {
  return fetch(BASE_URL+"pdf", {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token,
      id: id
    },
    method: "GET"
  }).then(response => response.blob())
  .then(blob => {
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = `${contract}.pdf`;
    a.click();
  });
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

export const createContract = (contract, token) => {
  return fetch(BASE_URL+"contracts", {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    method: "POST",
    body: JSON.stringify(contract)
  }).then(res => res.json())
}

export { login, signup, getCurrentUser, getInContracts, getOutContracts }
