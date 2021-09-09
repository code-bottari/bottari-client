import styled from "styled-components";

import Button from "./Button/Button";

const UserMenuButton = styled(Button)`
  border: none;
  background-color: rgba( 255, 255, 255, 0 );

& img:hover {
  transition: 0.2s;
  filter: opacity(0.5) drop-shadow(0 0 0 #26BFA6);
}

& img:active {
  filter: opacity(0.7) drop-shadow(0 0 0 #26BFA6);
}
`;

export default function UserMenu() {
  const UserMenuIcon = <img type="image" alt="user menu icon" src="/images/user_menu_icon.png" width="40" height="40" />;

  return (
    <>
      <UserMenuButton type="button" content={UserMenuIcon} />
    </>
  );
}
