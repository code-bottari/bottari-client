import { useRef, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import ProfileImage from "./ProfileImage";
import Nickname from "./Nickname";
import Button from "../common/Button";

import validateNickname from "../../utils/validateNickname";
import firebaseAPI from "../../api/firebase";
import addPhoto from "../../addPhoto";

import { REGISTRATION } from "../../constants/names";
import { BASIC } from "../../constants/variants";

import {
  FAILED_UPLOAD_IMAGE,
  OK,
} from "../../constants/messages";
import { registerUser } from "../../api/service";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  width: 430px;
  height: 500px;
  background: #F3F2F9;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;

  .title {
    margin: 0px;
    text-align: center;
  }
`;

export default function RegisterCard() {
  const [failureReason, setFailureReason] = useState("");
  const referenceTarget = useRef();
  const history = useHistory();

  const handleButtonClick = async () => {
    const nickname = referenceTarget.current.value;

    const validationResult = validateNickname(nickname);

    if (validationResult !== OK) {
      setFailureReason(validationResult);

      return;
    }

    const data = await addPhoto();

    if (!data) {
      alert(FAILED_UPLOAD_IMAGE);

      return;
    }

    const imageUrl = typeof data === "string" ? data : data.Location;
    const idToken = await firebaseAPI.getToken();
    const resource = { idToken, nickname, imageUrl };

    const response = await registerUser(idToken, resource);

    if (response === OK) {
      history.push("/");
    }
  };

  return (
    <Card>
      <h1 className="title">사용자 정보 등록</h1>
      <ProfileImage />
      <Nickname reference={referenceTarget} message={failureReason} />
      <Button variant={BASIC} onClick={handleButtonClick}>{REGISTRATION}</Button>
    </Card>
  );
}
