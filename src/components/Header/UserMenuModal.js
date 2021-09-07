import { useState } from "react";

import styled from "styled-components";
import Button from "../common/Button";
import TestModal from "./UserMenuModalWindow";

import { button } from "../../constants/button";
import { backgroundColor } from "../../constants/backgroundColor";

const ModalButton = styled(Button)`
  ${button.userModalButton}
  ${backgroundColor.mauve}

  &:hover {
    ${button.buttonHover}
  }
`;

const MiddleModalButton = styled(Button)`
  ${button.userModalButton}
  ${backgroundColor.mauve}
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    ${button.buttonHover}
  }
`;

export default function UserMenuModalWindow() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true)
  };

  const closeModal = () => {
    setModalVisible(false)
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {
        modalVisible &&
        <TestModal
          visible={modalVisible}
          maskClosable={true}
          onClose={closeModal}
        >
          <ModalButton type="Button" content="New Snippet" />
          <MiddleModalButton type="Button" content="My Page" />
          <ModalButton type="Button" content="Log out" />
        </TestModal>
      }
    </>
  );
}
