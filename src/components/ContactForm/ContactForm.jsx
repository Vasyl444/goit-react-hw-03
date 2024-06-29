import { Form, Field } from "formik";
import { useId } from "react";
//import contacts from "../../../contacts.json";

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  //const formValues = { name: "", number: "" };
  return (
    <Form>
      <label htmlFor={nameId}>Name</label>
      <Field type="text" name="name" id={nameId}></Field>
      <label htmlFor={numberId}>Number</label>
      <Field type="tel" name="number" id={numberId}></Field>
      <button type="submit">Add Contact</button>
    </Form>
  );
}
