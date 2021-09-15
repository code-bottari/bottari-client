import styled from "styled-components";

import Comment from "./Comment";

const CommentInputBox = styled.div`
  align-items: center;
  width: 1100px;
  margin-bottom: 50px;
  border: 2px solid #543FD3;
  border-radius: 8px;
`;

export default function CommentList({ commentList }) {
  return (
    <CommentInputBox>
      {commentList.map((comment) => (
        <Comment data={comment} />
      ))}
    </CommentInputBox>
  );
}
