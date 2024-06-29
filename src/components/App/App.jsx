//import { Formik } from "formik";
import css from "./App.module.css";
import contacts from "../../../contacts.json";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { useState } from "react";
import { Formik } from "formik";
export default function App() {
  //let newContact = contacts;
  const [formVal, setFormVal] = useState(contacts);
  console.log({ formVal });
  const formValues = { name: "", number: "" };
  const addContact = (values, actions) => {
    setFormVal((formVal) => {
      return [
        ...formVal,
        {
          id: JSON.stringify(new Date().getTime()),
          name: values.name.trim(),
          number: values.number.trim(),
        },
      ];
    });
    console.log(values);
    console.log("newContact : ", formVal);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={formValues}
      onSubmit={addContact}
      validate={() => {}}
    >
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <ContactList contacts={formVal} />.
      </div>
    </Formik>
  );
}
