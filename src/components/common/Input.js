import React from "react";
import PropTypes from "prop-types";

export default function Input({ type, placeholder = "", className }) {
	return (
		<input className={className} type={type} placeholder={placeholder} />
	);
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
