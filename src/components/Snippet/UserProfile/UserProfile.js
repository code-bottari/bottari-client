import PropTypes from "prop-types";
import styled from "styled-components";

import SubscribeButton from "./SubscribeButton";

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 15px;
`;

const Group = styled.div`
  margin-left: 15px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const UserName = styled.div`
  height: 20px;
  white-space: nowrap;
  font-weight: bold;
  cursor: pointer;
`;

export default function UserProfile({ profileUrl, nickname, subscriber }) {
  return (
    <ProfileWrapper>
      <UserImage src={profileUrl} />
      <Group>
        <UserName>{nickname}</UserName>
        <SubscribeButton variant="default" count={subscriber} />
      </Group>
    </ProfileWrapper>
  );
};

UserProfile.propTypes = {
  profileUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  subscriber: PropTypes.number.isRequired,
};
