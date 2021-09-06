import { useRef, useState } from "react";
import styled from "styled-components";

import ProfileImage from "./ProfileImage";
import Nickname from "./Nickname";
import Button from "../Button/Button";

const RegisterCard = styled.form`
  position: absolute;
  width: 320px;
  height: 400px;
  background: #F3F2F9;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;

  .title {
    text-align: center;
  }
`;

const RegisterButton = styled(Button)`
  position: absolute;
  bottom: 0px;
  width: 60px;
  height: 25px;
  margin: 25px 130px 35px;
  background-color: #AEA5DF;
  border-radius: 10px;
  border: none;
  font-size: 10px;
  color: #FFFFFF;

  &:hover {
    background-color: #26BFA6;
    transition: 0.2s;
  }

  &:active {
    background-color: #21A18C;
  }
`;

export default function Card() {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const [failureReason, setFailureReason] = useState("");

  const referenceTarget = useRef();

  const validateNickname = () => {
    const nickname = referenceTarget.current.value;
    const nicknameArray = Array.from(nickname);

    const hasSpecialCharacter = nicknameArray.some((character) => {
      return (
        (character.charCodeAt() >= 33 && character.charCodeAt() <= 47)
        || (character.charCodeAt() >= 58 && character.charCodeAt() <= 64)
        || (character.charCodeAt() >= 91 && character.charCodeAt() <= 96)
        || (character.charCodeAt() >= 123 && character.charCodeAt() <= 126)
      );
    });

    if (hasSpecialCharacter) {
      setFailureReason("특수문자를 포함할 수 없습니다.");
      return;
    }

    const hasSpace = nicknameArray.some((character) => character.charCodeAt() === 32);

    if (hasSpace) {
      setFailureReason("공백을 포함할 수 없습니다.");
      return;
    }

    if (nickname.length < 2) {
      setFailureReason("두 글자 이상 입력해 주세요.");
      return;
    }

    if (nickname.length > 10) {
      setFailureReason("최대 10자리까지 입력 가능합니다.");
      return;
    }
  };

  return (
    <RegisterCard action={SERVER_URL + "/users/register"} method="POST">
      <h1 className="title">사용자 정보 등록</h1>
      <ProfileImage />
      <Nickname reference={referenceTarget} message={failureReason} name="nickname" />
      <RegisterButton type="submit" content="등록" onClick={validateNickname} />
    </RegisterCard>
  );
}
