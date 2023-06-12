import axios from 'axios';

axios.defaults.baseURL = 'https://64847effee799e321626c11a.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios('contacts');
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post('contacts', contact);
  return data;
}
export async function deleteContacts(id) {
  const { data } = await axios.delete('contacts/' + id);
  return data;
}
