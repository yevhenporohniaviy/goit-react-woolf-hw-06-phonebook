import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filterList.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
