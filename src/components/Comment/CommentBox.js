import styled from "styled-components";
import CommentInput from "./CommentInputBox";
import CommentList from "./CommentList";

const Wrapper = styled.div`
  width: 1100px;
  margin: 15px auto;
`;

export default function CommentBox({ snippet }) {
  const { _id, commentList } = snippet;

  return (
    <Wrapper>
      <CommentInput snippetId={_id} />
      <CommentList commentList={commentList} />
    </Wrapper>
  );
}
