import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link } from 'react-router-dom';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  if (contacts.length === 0) {
    return (
      <div>
        <p>No Contact Found</p>
        <p>Please add contact from Create Contact Button</p>
      </div>
    );
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.firstName} {contact.lastName} - {contact.email}
          <Link to={`/contacts/${contact.id}`}>View</Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
