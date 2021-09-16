import { useState } from "react";
import { useMutation } from "react-query";
import PropTypes from "prop-types";
import styled from "styled-components";

import FollowButton from "./FollowButton";

import { setFollower } from "../../../api/service";

import { OK } from "../../../constants/messages";

import {
  DEFAULT,
  FOLLOWING,
} from "../../../constants/variants";

import {
  ADD,
  REMOVE,
} from "../../../constants/types";

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

export default function UserProfile({ posterId, profileUrl, nickname, follower, isFollowed }) {
  const userId = localStorage.getItem("userId");
  const isMySelf = userId === posterId;

  const [followerStatus, setFollowerStatus] = useState({
    variant: isFollowed ? FOLLOWING : DEFAULT,
    followerNumber: follower?.length,
  });

  const { mutate } = useMutation(({ posterId, taskType }) => setFollower(posterId, taskType), {
    onSuccess: (data) => {
      if (data.result === OK) {
        setFollowerStatus({
          variant: followerStatus.variant === DEFAULT ? FOLLOWING : DEFAULT,
          followerNumber: data.followerNumber,
        });

        return;
      }

      alert(data.message); // 에러 페이지 생성 후 처리
    },
  });

  const handleClick = () => {
    if (followerStatus.variant === FOLLOWING) {
      mutate({ posterId, taskType: REMOVE });

      return;
    }

    mutate({ posterId, taskType: ADD });
  };

  return (
    <ProfileWrapper>
      <UserImage src={profileUrl} />
      <Group>
        <UserName>{nickname}</UserName>
        <FollowButton variant={followerStatus.variant} count={followerStatus.followerNumber} onClick={!isMySelf ? handleClick : undefined} />
      </Group>
    </ProfileWrapper>
  );
};

UserProfile.propTypes = {
  posterId: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  follower: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFollowed: PropTypes.bool.isRequired,
};
