import styled from "styled-components";
import CommentInput from "./CommentInputBox";
import CommentList from "./CommentList";

const Wrapper = styled.div`
  width: 1100px;
  margin: 15px auto;
`;

export default function CommentBox({ snippet }) {
  const { _id } = snippet;

  const userId = localStorage.getItem("userId");

  return (
    <Wrapper>
      <CommentInput snippetId={_id} userId={userId} />
      <CommentList snippet={snippet} userId={userId} />
    </Wrapper>
  );
}
