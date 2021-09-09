import Button from "./common/Button";

import METHODS from "../constants/methods";

export default function NotificationButton() {
  const handleButtonClick = async () => {
    const { GET } = METHODS;

    await fetch(`${process.env.REACT_APP_SERVER_URL}/users/notification`, {
      method: GET,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Button name="icon" onClick={handleButtonClick}>
      <img src="images/notification_icon.png" alt="알림 버튼" width="40px" height="35px" />
    </Button>
  );
}
