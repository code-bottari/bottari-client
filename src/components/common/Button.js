import PropTypes from "prop-types";

<<<<<<< HEAD
export default function Button({ className, type, content, onClick = () => {} }) {
=======
export default function Button({ type, content, onClick = () => {} , className}) {
>>>>>>> ff37382 (Create: Create search icon)
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
