import styled from "styled-components";

import Button from "../../Common/Button";
import Dropdown from "../../Common/Dropdown";

import firebaseAPI from "../../../api/firebase";
import { logout } from "../../../api/service";

import { LIST } from "../../../constants/variants";

const DropdownWrapper = styled.div`
  z-index: 1;
`;

export default function UserMenuDropdown({ onClick }) {
  const handleLoginStatus = () => {
    onClick(false);
  };

  const handleLogout = async () => {
    try {
      const data = await logout("/users/logout");

      if (data.status) {
        throw new Error(data.message);
      }

      await firebaseAPI.logout();
    } catch (error) {
      alert(error); // 에러처리
      return;
    }

    await firebaseAPI.logout();

    handleLoginStatus();
  };

  const userMenuList = ["New Snippet", "My page", "Logout"].map((text) => {
    const isLogoutButton = text === "Logout";

    return (
      <Button
        variant="userMenu"
        onClick={isLogoutButton && handleLogout}
      >
        {text}
      </Button >
    );
  });

  return (
    <DropdownWrapper>
      <Dropdown variant={LIST} children={userMenuList} />
    </DropdownWrapper>
  );
}
