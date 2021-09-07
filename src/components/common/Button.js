import React from "react";
import PropTypes from "prop-types";

export default function Button({ type, className, content, onClick = () => { } }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {content}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
