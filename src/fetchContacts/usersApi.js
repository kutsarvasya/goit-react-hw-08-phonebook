import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

function setToken(token) {
  instance.defaults.headers.common['Authorization'] = token;
}
export function deleteToken() {
  delete instance.defaults.headers.common['Authorization'];
}

export async function getSignUp(value) {
  const { data } = await instance.post('/users/signup', value);
  setToken(`Bearer ${data.token}`);
  return data;
}
export async function getLogin(value) {
  const { data } = await instance.post('/users/login', value);
  setToken(`Bearer ${data.token}`);
  return data;
}
