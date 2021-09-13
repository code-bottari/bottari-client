import styled from "styled-components";

import Button from "../../Common/Button";
import Dropdown from "../../Common/Dropdown";

import firebaseAPI from "../../../api/firebase";
import { postData } from "../../../api/service";

import VARIANTS from "../../../constants/variants";

const { LIST } = VARIANTS;

const DropdownWrapper = styled.div`
  z-index: 1;
`;

export default function UserMenuDropdown({ onClick }) {
  const handleLoginStatus = () => {
    onClick(false);
  };

  const handleLogout = async () => {
    try {
      const data = await postData("/users/logout");

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
