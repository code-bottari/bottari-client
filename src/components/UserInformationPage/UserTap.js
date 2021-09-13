import { useRef, useState } from "react";
import styled from "styled-components";

import Button from "../Common/Button";
import ProfileImage from "../RegisterCard/ProfileImage";

import { postData } from "../../api/service";
import validateNickname from "../../utils/validateNickname";
import addPhoto from "../../addPhoto";

import MESSAGES from "../../constants/messages";

const {
  FAILED_UPLOAD_IMAGE,
  USER_INFORMATION_UPDATED,
  OK,
} = MESSAGES;

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 430px;
  height: 100%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
`;

const BlankBlock = styled.div`
  width: 430px;
  height: 100px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 430px;
  height: 200px;
  margin: 80px 0;
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
  border: 2px solid #543FD3;
  border-radius: 4px;
  outline: none;
  transition: 0.2s;

  &:focus {
    border: 2px solid #26BFA6;
  }

  &::placeholder {
    font-size: 14px;
  }
`;

const Email = styled.div`
  font-size: 25px;
`;

const SubscriberNumber = styled.div`
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
  const { email, nickname, imageUrl, subscriberList } = user;

  const [failureReason, setFailureReason] = useState();
  const reference = useRef();

  const handleButtonClick = async () => {
    const nickname = reference.current.value;

    const validationResult = validateNickname(nickname);

    if (validationResult !== OK) {
      setFailureReason(validationResult);

      return;
    }

    addPhoto()
      .then(async (data, error) => {
        if (error) {
          alert(FAILED_UPLOAD_IMAGE);

          return;
        }

        const imageURL = data.Location;
        const resource = { nickname, imageURL };
        const response = await postData(`/users/detail/${user._id}`, resource);

        if (response === OK) {
          alert(USER_INFORMATION_UPDATED);
        }
      });
  };

  return (
    <Wrapper>
      <BlankBlock />
      <ProfileImage imageUrl={imageUrl} />
      <Information>
        <NickName>{nickname}</NickName>
        <Input type="text" placeholder="수정할 닉네임을 입력해 주세요." ref={reference} />
        <Message>{failureReason}</Message>
        <Email>{email}</Email>
        <SubscriberNumber>구독자 수 : {subscriberList?.length}</SubscriberNumber>
      </Information>
      <ButtonWrapper>
        <Button variant="edit" children="수정하기" onClick={handleButtonClick} />
      </ButtonWrapper>
    </Wrapper>
  );
}
