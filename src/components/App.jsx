import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

const getInitialContacts = () => {
  const contactsLocal = localStorage.getItem('contacts');
  if (contactsLocal) {
    return JSON.parse(contactsLocal);
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Ankie Copeland', number: '227-91-26' },
  ];
};

export const App = () => {
  const [contacts, setcontacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitForm = ({ name, number }) => {
    const existingName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingName) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setcontacts(prevcontacts => [...prevcontacts, newContact]);
  };

  const onDelete = e => {
    const idContact = e.currentTarget.dataset.id;
    setcontacts(prevcontacts =>
      prevcontacts.filter(({ id }) => id !== idContact)
    );
  };

  const filtered = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitForm} />

      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onChangeFilter={e => setFilter(e.currentTarget.value)}
      />
      <ContactList contacts={filtered} onDelete={onDelete} />

      <GlobalStyle />
    </Layout>
  );
};
