import React from "react";
import style from "./Searchbar.module.css";
import PropTypes from "prop-types";

const Searchbar = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const query = form.elements.query.value;
		props.onSubmit({ query });
	};

    return (
      <header className={style.searchbar}>
        <form className={style.form} onSubmit={handleSubmit}>
          <button type="submit" className={style.button}>
            <span className={style.buttonLabel}>Search</span>
          </button>

          <input
            name="query"
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;