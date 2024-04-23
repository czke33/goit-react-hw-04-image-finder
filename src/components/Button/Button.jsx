import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <div className={style.buttonWrapper}>
      <button onClick={onClick} className={style.button}>
        Load more...
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;