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
  margin-left: 160px;
  margin-bottom: 100px;
`;

const Message = styled.p`
  font-size: 12px;
  color: var(--color-message);
`;

export default function UserTap({ user }) {
  const { email, nickname, imageUrl, followerList } = user;

  const [failureReason, setFailureReason] = useState();
  const reference = useRef();

  const handleButtonClick = async () => {
    const nickname = reference.current.value;

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

    const imageURL = typeof(data) === String ? data : data.Location;
    const resource = { nickname, imageURL };
    const response = await modifyUserData(user._id, resource);

    if (response === OK) {
      alert(USER_INFORMATION_UPDATED);
    }
  };

  return (
    <Wrapper>
      <FixedWrapper>
        <BlankBlock />
        <ProfileImage imageUrl={imageUrl} />
        <Information>
          <NickName>{nickname}</NickName>
          <Input type="text" placeholder="수정할 닉네임을 입력해 주세요." ref={reference} />
          <Message>{failureReason}</Message>
          <Email>{email}</Email>
          <FollowerNumber>구독자 수 : {followerList?.length}</FollowerNumber>
        </Information>
        <ButtonWrapper>
          <Button variant="edit" children="수정하기" onClick={handleButtonClick} />
        </ButtonWrapper>
      </FixedWrapper>
    </Wrapper>
  );
}
