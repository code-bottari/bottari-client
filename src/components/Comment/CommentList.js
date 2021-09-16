import styled from "styled-components";

import Comment from "./Comment";

const CommentInputBox = styled.div`
  align-items: center;
  width: 1100px;
  margin-bottom: 50px;
  border: 2px solid #543FD3;
  border-radius: 8px;
`;

export default function CommentList({ snippet, userId }) {
  const { _id, commentList } = snippet;

  return (
    <CommentInputBox>
      {commentList.map((comment) => (
        <Comment key={_id} data={comment} snippetId={_id} userId={userId} />
      ))}
    </CommentInputBox>
  );
}
