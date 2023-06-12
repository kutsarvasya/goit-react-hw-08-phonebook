// import { Item, List } from './Contacts.styled';

import { Item, List } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { getContactsThunk } from 'store/contacts/getContactsThunk';
import { deleteContactsThunk } from 'store/contacts/deleteContact';

export function Contacts() {
  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );

  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filteredContacts = useMemo(() => {
    if (!filter) return items;
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, items]);

  return (
    <>
      <List>
        {filteredContacts.map(contact => (
          <Item key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => dispatch(deleteContactsThunk(contact.id))}>
              Удалить
            </button>
          </Item>
        ))}
      </List>
      {isLoading && <h1>LOADING...</h1>}
      {error && <h1>ERROR...</h1>}
    </>
  );
}
