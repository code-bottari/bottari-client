import styled from "styled-components";

import Button from "../../common/Button";
import Dropdown from "../../common/Dropdown";

import firebaseAPI from "../../../api/firebase";
import { logout } from "../../../api/service";

import { LIST } from "../../../constants/variants";
import { OK } from "../../../constants/messages";

const DropdownWrapper = styled.div`
  z-index: 1;
`;

export default function UserMenuDropdown({ handleLoginStatus }) {
  const handleLogout = async () => {
    const { result } = await logout();

    if (result === OK) {
      await firebaseAPI.logout();

      localStorage.removeItem("userId");

      handleLoginStatus(false);
    }
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
