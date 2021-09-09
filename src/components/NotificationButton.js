import Button from "./common/Button";

export default function NotificationButton() {
  const handleButtonClick = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/users/notification`, {
      method: "get",
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
