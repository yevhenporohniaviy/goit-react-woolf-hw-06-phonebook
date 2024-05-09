import React from 'react';
import { ContactForm, ContactList, Filter, Section } from './Phonebook';

function App() {
  return (
    <>
      <Section title="Phonebook" />
      <ContactForm />
      <Section title="Contacts" />
      <Filter />
      <ContactList />
    </>
  );
}

export default App;
