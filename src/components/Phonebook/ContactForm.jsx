import { useForm } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleAddContact = data => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    dispatch(addContact({ ...data, id: nanoid() }));
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      number: '',
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(data => {
          handleAddContact(data);
          reset();
        })}
        noValidate
      >
        <label>
          Name
          <input
            type="text"
            {...register('name', {
              required: {
                value: true,
                message: 'Required name field',
              },
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message:
                  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
              },
            })}
          />
          <p style={{ color: 'red' }}>{errors.name?.message}</p>
        </label>
        <label>
          Phone
          <input
            type="tel"
            {...register('number', {
              required: {
                value: true,
                message: 'Required number field',
              },
              pattern: {
                value:
                  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                message:
                  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
              },
            })}
          />
          <p style={{ color: 'red' }}>{errors.number?.message}</p>
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
