import React from "react";
import PropTypes from "prop-types";

export default function Button({ type, className, onClick = () => {}, content }) {
	return (
		<button type={type} className={className} onClick={onClick}>
			{content}
		</button>
	);
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
