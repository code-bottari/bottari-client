import styled, { css } from "styled-components";

import { deleteComment } from "../../api/service";

import getDate from "../../utils/getDate";

import {
  DELETE_COMMENT_SUCCEEDED,
  OK,
} from "../../constants/messages";

const setPadding = (size) => css`
  padding-right: ${size};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 1050px;
  height: 50px;
  padding-left: 26px;
  font-size: 20px;
`;

const UserImage = styled.img`
  margin-right: 20px;
  margin-left: 10px;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
`;

const UserName = styled.div`
  width: 80px;
  margin-top: 4px;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  width: 900px;
  padding-left: 18px;
  margin-top: 4px;
  font-size: 20px;
`;

const Date = styled.div`
  width: 100px;
  height: 20px;
  padding-left: 15px;
  color: gray;
  font-size: 15px;
  font-weight: bold;

  ${({ isCreator }) => {
    if (!isCreator) {
      return setPadding("17px");
    }
  }}
`;

const DeleteButton = styled.div`
  height: 20px;
  padding-left: 10px;
  color: red;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export default function Comment({ data, snippetId, userId, updateCommentList }) {
  const { _id: commentId, creator, content, createdAt } = data;
  const dateFormat = getDate(createdAt);
  const isCreator = creator._id === userId;

  const handleOnclick = async () => {
    const response = await deleteComment({ userId, commentId, snippetId });

    if (response.result === OK) {
      alert(DELETE_COMMENT_SUCCEEDED);

      updateCommentList(true);
    }
  };

  return (
    <Wrapper>
      <UserImage src={creator.imageUrl} alt="프로필 이미지" width="25px" height="25px" />
      <UserName>{creator.nickname}</UserName>
      <Content>{content}</Content>
      <Date isCreator={isCreator}>{dateFormat}</Date>
      {isCreator && <DeleteButton onClick={handleOnclick}>X</DeleteButton>}
    </Wrapper>
  );
}
