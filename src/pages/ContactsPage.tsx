import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const ContactsPage: React.FC = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
