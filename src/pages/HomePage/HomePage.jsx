import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';

export function HomePage() {
  return (
    <>
      <Form />
      <Filter />
      <Contacts />
    </>
  );
}
