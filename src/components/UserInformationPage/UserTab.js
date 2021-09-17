import { useRef, useState } from "react";
import styled from "styled-components";

import Button from "../common/Button";
import ProfileImage from "../RegisterCard/ProfileImage";

import { modifyUserData } from "../../api/service";
import validateNickname from "../../utils/validateNickname";
import addPhoto from "../../addPhoto";

import {
  FAILED_UPLOAD_IMAGE,
  USER_INFORMATION_UPDATED,
  OK,
} from "../../constants/messages";

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 430px;
  height: 100%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
`;

const FixedWrapper = styled.div`
  position: fixed;
`;

const BlankBlock = styled.div`
  width: 430px;
  height: 60px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 430px;
  height: 200px;
  margin: 50px 0;
  text-align: center;
`;

const NickName = styled.div`
  font-weight: bold;
  font-size: 35px;
`;

const EditButton = styled.button`
  width: 90px;
  margin: 10px auto;
  border: 1px solid var(--color-message);
  border-radius: 5px;
  font-size: 15px;
  color: var(--color-message);
  cursor: pointer;
`;

const Input = styled.input`
  display: block;
  width: 230px;
  height: 30px;
  padding-left: 10px;
  margin-left: 90px;
  border: 2px solid var(--color-message);
  border-radius: 4px;
  outline: none;
  transition: 0.2s;

  &:focus {
    border: 2px solid var(--color-mint-focus);
  }

  &::placeholder {
    font-size: 14px;
  }
`;

const Email = styled.div`
  font-size: 25px;
`;

const FollowerNumber = styled.div`
  font-size: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 250px;
  margin-left: 85px;
`;

const Message = styled.p`
  font-size: 12px;
  color: var(--color-message);
`;

export default function UserTab({ user, changeUserImage, changeNickname, changedNickname }) {
  const { _id: userId, email, nickname, imageUrl, followerList } = user;

  const [failureReason, setFailureReason] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(imageUrl);
  const reference = useRef();

  const loggedInId = localStorage.getItem("userId");
  const canEdit = loggedInId === userId;

  let data;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFailureReason("");
    setProfileImage(imageUrl);
  };

  const handleSubmitClick = async () => {
    const nickname = reference.current.value;

    const validationResult = validateNickname(nickname);

    if (validationResult !== OK) {
      setFailureReason(validationResult);

      return;
    }

    setFailureReason("");

    const resource = typeof data === "string"
      ? { nickname }
      : { nickname, imageUrl: profileImage };

    const response = await modifyUserData(user._id, resource);

    if (response.result === OK) {
      alert(USER_INFORMATION_UPDATED);

      setIsEditing(false);
      changeUserImage(profileImage);
      changeNickname(nickname);
    }
  };

  const changeProfileImage = async () => {
    data = await addPhoto();

    if (!data) {
      alert(FAILED_UPLOAD_IMAGE);

      return;
    }

    if (typeof data !== "string") {
      setProfileImage(data.Location);
    }
  };

  return (
    <Wrapper>
      <FixedWrapper>
        <BlankBlock />
        <ProfileImage imageUrl={profileImage} canSelectImage={isEditing} changeImage={changeProfileImage} />
        <Information>
          <NickName>{changedNickname || nickname}</NickName>
          {(canEdit && !isEditing) && <EditButton onClick={handleEditClick}>내 정보 수정</EditButton>}
          {isEditing && <Input type="text" placeholder="수정할 닉네임을 입력해 주세요." ref={reference} />}
          <Message>{failureReason}</Message>
          <Email>{email}</Email>
          <FollowerNumber>구독자 수 : {followerList?.length}</FollowerNumber>
        </Information>
        <ButtonWrapper>
          {isEditing && <Button variant="edit" children="수정하기" onClick={handleSubmitClick} />}
          {isEditing && <Button variant="edit" children="수정취소" onClick={handleCancelClick} />}
        </ButtonWrapper>
      </FixedWrapper>
    </Wrapper>
  );
}
