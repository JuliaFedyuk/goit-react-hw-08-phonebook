import { Component } from 'react';
import ContactList from '../Components/ContactList/ContactList';
import ContactForm from '../Components/ContactForm';
import Filter from '../Components/Filter';

class ContactsPage extends Component {
  render() {
    return (
      <>
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default ContactsPage;
