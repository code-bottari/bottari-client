import { useState } from "react";

import Button from "../../Common/Button";
import UserMenuDropdown from "./UserMenuDropdown";

import VARIANTS from "../../../constants/variants";

const { ICON } = VARIANTS;

export default function UserMenuButton({ onClick }) {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const UserMenuIcon = <img alt="사용자 메뉴 아이콘" src="/images/user_menu_icon.png" width="40" height="40" />;

  const handleDropDown = () => {
    setToggleDropDown(!toggleDropDown);
  };

  const handleLoginStatus = (boolean) => {
    onClick(boolean);
  };

  return (
    <>
      <Button variant={ICON} onClick={handleDropDown} children={UserMenuIcon} />
      {toggleDropDown && <UserMenuDropdown onClick={handleLoginStatus} />}
    </>
  );
}
