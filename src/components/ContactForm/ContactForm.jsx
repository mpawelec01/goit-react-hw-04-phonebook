import { nanoid } from 'nanoid';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ phonebook, setPhonebook }) => {
  const [contact, setContact] = useState({
    id: '',
    name: '',
    number: '',
  });

  const getContactInfo = e => {
    const { name, value } = e.target;
    setContact({ ...contact, id: nanoid(), [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isContactInList = phonebook.contacts.some(element => {
      if (element.name === contact.name) {
        return true;
      }
      return false;
    });
    if (isContactInList) {
      alert(`${contact.name} is already in contacts.`);
    } else {
      const array = phonebook.contacts.slice();
      array.push(contact);
      setPhonebook({ ...phonebook, contacts: array });
      setContact({ id: '', name: '', number: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={getContactInfo}
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={contact.number}
          onChange={getContactInfo}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  phonebook: PropTypes.shape({
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  }).isRequired,
  setPhonebook: PropTypes.func.isRequired,
};
