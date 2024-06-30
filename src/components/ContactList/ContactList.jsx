import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, handleDelete }) {
  console.log({ handleDelete });
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}
