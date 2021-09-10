import { useState } from "react";

import Button from "./common/Button";
import Dropdown from "../components/common/Dropdown";

import METHODS from "../constants/methods";

export default function NotificationButton() {
  const [isClicked, setClickStatus] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleButtonClick = async () => {
    const { GET } = METHODS;

    const notifications = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/notification`, {
      method: GET,
      headers: {
        "Content-Type": "application/json",
      },
    });

    setClickStatus(true);
    setNotifications(notifications);
  };

  const handleDropdownClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      return;
    }

    setClickStatus(false);
  };

  return (
    <>
      <Button name="icon" onClick={handleButtonClick}>
        <img src="images/notification_icon.png" alt="알림 버튼" width="40px" height="35px" />
      </Button>
      {isClicked && (
        <Dropdown name="list" onClick={handleDropdownClick}>
          {notifications.map((notification) => <Button name="notification" key={notification._id}>{notification}</Button>)}
        </Dropdown>
      )}
    </>
  );
}
