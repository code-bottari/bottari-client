import { useState } from "react";
import { useQueryClient } from "react-query";
import styled from "styled-components";

import LoginButton from "./LoginButton";
import NotificationButton from "./NotificationButton";
import UserMenuButton from "./UserMenuButton";

const ToolWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
`;

export default function UserTools() {
  const queryClient = useQueryClient();

  const [isLogin, setLoginStatus] = useState(queryClient.getQueryData("login"));

  const hasUserId = !!queryClient.getQueryData("login")?.userId;

  const handleClick = () => setLoginStatus(hasUserId);

  return (
    <ToolWrapper>
      {!isLogin && <LoginButton onClick={handleClick} />}
      {isLogin && (
        <>
          <NotificationButton />
          <UserMenuButton />
        </>
      )}
    </ToolWrapper>
  );
}
