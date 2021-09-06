import PropTypes from "prop-types";

export default function Button({ className, type, content, onClick = () => {} }) {
	return (
		<button className={className} type={type} onClick={onClick}>
			{content}
		</button>
	);
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
