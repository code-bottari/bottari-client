import React from "react";
import PropTypes from "prop-types";

export default function Button({ type, content, onClick = () => {} }) {
	return (
		<button type={type} onClick={onClick}>
			{content}
		</button>
	);
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
