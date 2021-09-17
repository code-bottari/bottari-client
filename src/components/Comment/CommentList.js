import styled from "styled-components";

import Comment from "./Comment";

const CommentInputBox = styled.div`
  align-items: center;
  width: 1100px;
  margin-bottom: 200px;
  border: 2px solid #543FD3;
  border-radius: 8px;
`;

const Message = styled.div`
  align-items: center;
  width: 1100px;
  height: 100px;
  margin-bottom: 200px;
  border: 2px solid #543FD3;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
`;

export default function CommentList({ snippet, userId }) {
  const { _id, commentList, poster } = snippet;

  if (commentList.length === 0) {
    return <Message>{poster.nickname}님의 게시글에 첫 댓글을 남겨보세요!</Message>;
  }

  return (
    <CommentInputBox>
      {commentList.map((comment) => (
        <Comment key={_id} data={comment} snippetId={_id} userId={userId} />
      ))}
    </CommentInputBox>
  );
}
