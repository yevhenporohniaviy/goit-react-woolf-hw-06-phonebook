import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = id => {
    dispatch(deleteContact({ id }));
  };

  return (
    <li>
      <p>
        {name} {number}
      </p>
      <button onClick={() => handleRemoveContact(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;
