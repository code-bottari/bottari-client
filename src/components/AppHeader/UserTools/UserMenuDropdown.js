import styled from "styled-components";

import Button from "../../common/Button";
import Dropdown from "../../common/Dropdown";

import firebaseAPI from "../../../api/firebase";
import { postData } from "../../../api/service";

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
        onClick={isLogoutButton ? handleLogout : undefined}
      >
        {text}
      </Button >
    );
  });

  return (
    <DropdownWrapper>
      <Dropdown variant="list" children={userMenuList} />
    </DropdownWrapper>
  );
}
