import React from "react";
import style from "./OnError.module.css";
import PropTypes from "prop-types";

const OnError = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

OnError.propTypes = {
  children: PropTypes.node.isRequired,
};
export default OnError;