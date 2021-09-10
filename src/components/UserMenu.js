import Button from "./common/Button";

export default function UserMenu() {
  const UserMenuIcon = <img type="image" alt="user menu icon" src="/images/user_menu_icon.png" width="40" height="40" />;

  return (
    <>
      <Button name="icon" children={UserMenuIcon} />
    </>
  );
}
