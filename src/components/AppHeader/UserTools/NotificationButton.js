import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "styled-components";

import Button from "../../common/Button";
import Dropdown from "../../common/Dropdown";

import { getNotificationList } from "../../../api/service";

import {
  ICON,
  LIST,
  NOTIFICATION
} from "../../../constants/variants";

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 80px;
  right: 15px;
`;

const Message = styled.p`
  display: inline-block;
  margin: 0px;
`;

const selectPath = (type, targetPath) => {
  const pathTypes = {
    like: `/snippets/${targetPath}`,
    comment: `/snippets/${targetPath}`,
    snippet: `/snippets/${targetPath}`,
    follower: `/users/${targetPath}`,
  };

  return pathTypes[type];
};

const selectIcon = (type) => {
  const iconTypes = {
    like: "images/like.png",
    comment: "images/comment.png",
    snippet: "images/new_snippet.png",
    follower: "images/followMark.png",
  };

  return iconTypes[type];
};

const selectAlternative = (type) => {
  const alternativeTypes = {
    like: "좋아요 아이콘",
    comment: "댓글 아이콘",
    snippet: "스니펫 아이콘",
    follower: "팔로우 아이콘",
  };

  return alternativeTypes[type];
};

const selectMessage = (type, user) => {
  const messageTypes = {
    like: `${user.nickname}님께서 회원님의 스니펫을 좋아합니다.`,
    comment: `${user.nickname}님께서 회원님의 스니펫에 댓글을 남겼습니다.`,
    snippet: `${user.nickname}님께서 새 스니펫을 업로드하셨습니다.`,
    follower: `${user.nickname}님께서 회원님을 팔로우하셨습니다.`,
  };

  return messageTypes[type];
};

export default function NotificationButton() {
  const [isClicked, setIsClicked] = useState(false);

  const { data } = useQuery("notificationList", async () => await getNotificationList());

  const filteredNotificationList = data?.notificationList.filter((notification) => notification.isChecked === false);

  const handleButtonClick = () => setIsClicked(!isClicked);

  const handleDropdownClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      return;
    }

    setIsClicked(!isClicked);
  };

  return (
    <NotificationWrapper>
      <Button variant={ICON} onClick={handleButtonClick}>
        <img src="images/notification_icon.png" alt="알림 버튼" width="40px" height="35px" />
      </Button>
      <DropdownWrapper>
        {isClicked && (
          <Dropdown variant={LIST} onClick={handleDropdownClick}>
            {filteredNotificationList.map(({ type, user, targetId: targetPath, _id: notificationId }) => (
              <Link to={selectPath(type, targetPath)}>
                <Button
                  variant={NOTIFICATION}
                  key={notificationId}
                >
                  <img src={selectIcon(type)} alt={selectAlternative(type)} width="30px" height="25px" />
                  <Message>
                    {selectMessage(type, user, targetPath)}
                  </Message>
                </Button>
              </Link>
            ))}
          </Dropdown>
        )}
      </DropdownWrapper>
    </NotificationWrapper>
  );
}
