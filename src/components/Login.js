import styled from "styled-components";

import Button from "./Button/Button";

const LoginButton = styled(Button)`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #AEA5DF;
  color: white;
`;

export default function Login() {
  return (
    <>
      <LoginButton type="button" content="로그인" />
    </>
  );
}
