import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const nameId = useId();
  const numberId = useId();
  const formValues = { name: "", number: "" };
  const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;
  const InputsSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .matches(phoneRegExp, "incorrect number format")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={formValues}
      onSubmit={onSubmit}
      validationSchema={InputsSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldDiv}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId}></Field>
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.fieldDiv}>
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" name="number" id={numberId}></Field>
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
