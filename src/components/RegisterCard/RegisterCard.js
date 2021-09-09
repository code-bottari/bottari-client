import { useRef, useState } from "react";
import { useHistory } from "react-router";

import styled from "styled-components";

import ProfileImage from "./ProfileImage";
import Nickname from "./Nickname";
import Button from "../common/Button";

import validateNickname from "../../utils/validateNickname";
import firebaseAPI from "../../api/firebase";
import addPhoto from "../../addPhoto";

import MESSAGES from "../../constants/messages";
import METHODS from "../../constants/methods";
import NAMES from "../../constants/names";

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
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const [failureReason, setFailureReason] = useState("");
  const referenceTarget = useRef();
  const history = useHistory();

  const { FAILED_UPLOAD_IMAGE, OK } = MESSAGES;
  const { POST } = METHODS;
  const { REGISTRATION } = NAMES;

  const handleButtonClick = async () => {
    const nickname = referenceTarget.current.value;

    const validationResult = validateNickname(nickname);

    if (validationResult !== OK) {
      setFailureReason(validationResult);
      return;
    }

    addPhoto()
      .then(async (data, error) => {
        if (error) {
          return alert(FAILED_UPLOAD_IMAGE);
        }

        const imageURL = data.Location;

        const idToken = await firebaseAPI.getToken();

        const resource = { nickname, imageURL, idToken };

        const options = {
          method: POST,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(resource),
        };

        const response = await fetch(`${SERVER_URL}users/register`, options);

        const result = await response.json();

        if (result === OK) {
          history.push("/");
        }
      });
  };

  return (
    <Card>
      <h1 className="title">사용자 정보 등록</h1>
      <ProfileImage />
      <Nickname name="nickname" reference={referenceTarget} message={failureReason} />
      <Button name="basic" onClick={handleButtonClick} children={REGISTRATION} />
    </Card>
  );
}
