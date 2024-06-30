import css from "./App.module.css";
import contacts from "../../../contacts.json";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const hundleChange = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };
  const storageValues = () => {
    if (JSON.parse(localStorage.getItem("formValues")) === null) {
      return contacts;
    } else {
      return JSON.parse(localStorage.getItem("formValues"));
    }
  };
  const [formValue, setFormValue] = useState(storageValues);
  const addContact = (values, actions) => {
    setFormValue([
      ...formValue,
      {
        id: JSON.stringify(new Date().getTime()),
        name: values.name.trim(),
        number: values.number.trim(),
      },
    ]);
    actions.resetForm();
  };
  const handleDelete = (itemId) => {
    setFormValue((formValue) => {
      return formValue.filter((item) => item.id !== itemId);
    });
  };
  const visibleContacts = () => {
    if (search === "") {
      return formValue;
    } else {
      return formValue.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  };
  useEffect(() => {
    window.localStorage.setItem("formValues", JSON.stringify(formValue));
  }, [formValue]);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox hundleChange={hundleChange} />
      <ContactList contacts={visibleContacts()} handleDelete={handleDelete} />
    </div>
  );
}
