import React from 'react';
import { PhonebookList } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList({ contacts, onDelete }) {
  if (!contacts.length) return <p>The Phonebook is empty!</p>;
  return (
    <PhonebookList>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </PhonebookList>
  );
}
