import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ setPhonebook, phonebook, filteredContacts }) => {
  const removeContact = id => {
    const removing = phonebook.contacts.filter(contact => contact.id !== id);
    setPhonebook({ ...phonebook, contacts: removing });
  };
  return (
    <ul>
      {phonebook.filter === ''
        ? phonebook.contacts?.map(item => (
            <ContactListItem
              key={item.id}
              name={item.name}
              number={item.number}
              onRemove={removeContact}
              id={item.id}
            />
          ))
        : filteredContacts?.map(item => (
            <ContactListItem
              key={item.id}
              name={item.name}
              number={item.number}
              onRemove={removeContact}
              id={item.id}
            />
          ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  setPhonebook: PropTypes.func.isRequired,
  phonebook: PropTypes.shape({
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  }).isRequired,
  filteredContacts: PropTypes.array.isRequired,
};
