import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const storedItems = JSON.parse(localStorage.getItem('contacts')) || [];

  const [phonebook, setPhonebook] = useState({
    contacts: storedItems,
    filter: '',
  });

  const filteredContacts = phonebook.contacts?.filter(contact =>
    contact.name.toLowerCase().includes(phonebook.filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(phonebook.contacts));
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm phonebook={phonebook} setPhonebook={setPhonebook} />

      <h2>Contacts</h2>
      <Filter phonebook={phonebook} setPhonebook={setPhonebook} />
      <ContactList
        phonebook={phonebook}
        setPhonebook={setPhonebook}
        filteredContacts={filteredContacts}
      />
    </div>
  );
};
