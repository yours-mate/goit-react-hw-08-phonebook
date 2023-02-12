import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export function ContactsList() {
  const currentContacts = useSelector(getContacts);
  const currentFilter = useSelector(getFilter);

  const searchedContacts = useMemo(() => {
    console.log(currentContacts);
    return currentContacts.filter(contact =>
      contact.name.toLowerCase().includes(currentFilter.toLowerCase())
    );
  }, [currentContacts, currentFilter]);

  return (
    <div>
      <ul>
        {searchedContacts.map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
}
