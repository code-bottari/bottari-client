import PropTypes from "prop-types";

export default function Modal({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
};
