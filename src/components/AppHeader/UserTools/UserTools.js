import { useState } from "react";
import styled from "styled-components";

import LoginButton from "./LoginButton";
import NotificationButton from "./NotificationButton";
import UserMenuButton from "./UserMenuButton";

import checkCookie from "../../../utils/checkCookie";

const ToolWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
`;

export default function UserTools() {
  const loginStatus = checkCookie("auth");
  const [isLogin, setIsLogin] = useState(loginStatus);

  const handleLoginStatus = (boolean) => {
    setIsLogin(boolean);
  };

  return (
    <ToolWrapper>
      {!isLogin && <LoginButton onClick={handleLoginStatus} />}
      {isLogin && (
        <>
          <NotificationButton />
          <UserMenuButton onClick={handleLoginStatus} />
        </>
      )}
    </ToolWrapper>
  );
}
