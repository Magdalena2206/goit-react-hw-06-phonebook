import { ContactListStyle, ContactItemStyle } from "./ContactList.styled"
import { ButtonStyle } from 'components/App.styled';
import { getFilter } from "components/redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { delContact, getPhoneBookValue } from "components/redux/phoneBookSlice";

export const ContactsList = () => {
    const dispatch = useDispatch();

    const phoneBook = useSelector(getPhoneBookValue);
    const filterPhoneBook = useSelector(getFilter);

    const lowerFilter = filterPhoneBook.toLowerCase();
    const visibleContacts = phoneBook.filter(({ name }) =>
        (name.toLowerCase().includes(lowerFilter)));
  
    const deleteContact = (contactId) => {
        dispatch(delContact(contactId))
    };
    
    return (
        <ContactListStyle>
            {visibleContacts.map(({ name, number, id }) => (
                <ContactItemStyle key={id}>
                    <p>{name}: {number}</p>
                    <ButtonStyle type="button" onClick={() => deleteContact(id)}>Delete</ButtonStyle>
                </ContactItemStyle>))}
        </ContactListStyle>
    );
};