import css from "./SearchBox.module.css";
import { useId } from "react";
export default function SearchBox({ hundleChange }) {
  const searchId = useId();
  return (
    <form onChange={hundleChange} className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input type="text" name="search" id={searchId}></input>
    </form>
  );
}
