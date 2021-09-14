import { useState } from "react";

import Button from "../../common/Button";
import Dropdown from "../../common/Dropdown";

import { GET } from "../../../constants/methods";

import {
  ICON,
  LIST,
  NOTIFICATION
} from "../../../constants/variants";

export default function NotificationButton() {
  const [isClicked, setClickStatus] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/notification`, {
        method: GET,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      const { notifications } = data;

      setClickStatus(true);
      setNotifications(notifications);
    } catch (error) {
      if (error) {
        alert(error.message); // 에러 처리
      }
    }
  };

  const handleDropdownClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      return;
    }

    setClickStatus(false);
  };

  return (
    <>
      <Button variant={ICON} onClick={handleButtonClick}>
        <img src="images/notification_icon.png" alt="알림 버튼" width="40px" height="35px" />
      </Button>
      {isClicked && (
        <Dropdown variant={LIST} onClick={handleDropdownClick}>
          {notifications.map((notification) => (
            <Button
              variant={NOTIFICATION}
              key={notification._id}
            >
              {notification}
            </Button>
          ))}
        </Dropdown>
      )}
    </>
  );
}
