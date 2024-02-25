import { Form } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";

export const App = () => (
  <Container>
    <h1>Phonebook</h1>
    <Form />
    <h2>Contacts</h2>
    <Filter />
    <ContactsList />
  </Container>
);