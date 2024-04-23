import React, { useEffect } from "react";
import style from "./Modal.module.css";
import PropTypes from "prop-types";

const Modal = (props) => {
	const { src, alt, closeHandler, escHandler } = props;
	useEffect(() => {
		document.addEventListener("keydown", escHandler);
		return () => {
			document.removeEventListener("keydown", escHandler);
		};
	}, [escHandler]);

	return (
		<div className={style.overlay} onClick={closeHandler}>
			<div className={style.modal}>
				<img src={src} alt={alt} />
			</div>
		</div>
	);
};

Modal.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	closeHandler: PropTypes.func.isRequired,
	escHandler: PropTypes.func.isRequired,
};

export default Modal;
   