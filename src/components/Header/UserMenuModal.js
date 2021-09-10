import { useState } from "react";

import Button from "../common/Button";
import UserMenuModalWindow from "./UserMenuModalWindow";

export default function UserMenuModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {
        isOpen &&
        <UserMenuModalWindow
          visible={isOpen}
          onClick={closeModal}
        >
          <Button name="userMenu" children="New Snippet" />
          <Button name="userMenu" children="My Page" />
          <Button name="userMenu" children="Log out" />
        </UserMenuModalWindow>
      }
    </>
  );
}
