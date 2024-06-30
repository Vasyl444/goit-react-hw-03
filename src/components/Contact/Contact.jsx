import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

export default function Contact({
  contact: { name, number, id },
  handleDelete,
}) {
  return (
    <div className={css.contact}>
      <div className={css.contactWrapper}>
        <div className={css.wrapper}>
          <IoPersonSharp />
          <p className={css.item}>{name}</p>
        </div>
        <div className={css.wrapper}>
          <IoCall />
          <p className={css.item}>{number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => handleDelete(id)}
        className={css.contactButton}
      >
        Delete
      </button>
    </div>
  );
}
