import styled from "styled-components";
import PropTypes from "prop-types";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const ModalInner = styled.div`
  position: fixed;
  box-sizing: border-box;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  top: 10%;
  right: 1%;
  width: 220px;
  max-width: 480px;
  height: 180px;
  margin: 0 auto;
  padding: 20px 20px;
  border-radius: 10px;
  background-color: #ffffff;
`;

export default function UserMenuModalWindow({ className, visible, children, onClose, maskClosable }) {
  const onMaskClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(event);
    }
  };

  return (
    <>
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        visible={visible}
      >
        <ModalInner>
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

UserMenuModalWindow.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  maskClosable: PropTypes.bool.isRequired,
};
