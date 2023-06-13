import { instance } from './usersApi';

export async function fetchContacts() {
  const { data } = await instance('/contacts');
  return data;
}

export async function addContacts(contact) {
  const { data } = await instance.post('/contacts', contact);
  return data;
}
export async function deleteContacts(id) {
  const { data } = await instance.delete('/contacts/' + id);
  return data;
}
