import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const nameId = useId();
  const numberId = useId();
  const formValues = { name: "", number: "" };
  return (
    <Formik initialValues={formValues} onSubmit={onSubmit} validate={() => {}}>
      <Form className={css.form}>
        <div className={css.fieldDiv}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId}></Field>
        </div>
        <div className={css.fieldDiv}>
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" name="number" id={numberId}></Field>
        </div>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
