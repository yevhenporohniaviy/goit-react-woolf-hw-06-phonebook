import React from 'react';
import { ContactForm, ContactList, Filter, Section } from './Phonebook';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';

import { addContact, deleteContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';
import { getContacts, getFilter } from '../redux/selectors';

function App() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const handleAddContact = data => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    dispatch(addContact({ ...data, id: nanoid() }));
  };

  const handleTypeFilter = value => {
    dispatch(setFilter(value.toLowerCase().trim()));
  };

  const handleRemoveContact = id => {
    dispatch(deleteContact({ id }));
  };

  const filterList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook" />
      <ContactForm onAddContact={handleAddContact} />
      <Section title="Contacts" />
      <Filter filter={filter} onTypeFilter={handleTypeFilter} />
      <ContactList
        contacts={filterList}
        onRemoveContact={handleRemoveContact}
      />
    </>
  );
}

export default App;
