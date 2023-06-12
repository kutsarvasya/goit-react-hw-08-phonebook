import { useDispatch } from 'react-redux';
import { LabelFilter } from './Filter.styled';
import { actions } from 'store/contacts/ContactsSlice';

export function Filter() {
  const dispatch = useDispatch();

  function changeFilter(evt) {
    dispatch(actions.changeFilter(evt.target.value));
  }

  return (
    <>
      <LabelFilter>
        Find contacts by name
        <input type="text" onChange={changeFilter} />
      </LabelFilter>
    </>
  );
}
