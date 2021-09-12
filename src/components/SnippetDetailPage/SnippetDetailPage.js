import styled from "styled-components";

import DetailSnippet from "./Snippet/Snippet";

const SnippetBox = styled.div`
  width: 1100px;
  margin: 15px auto;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

export default function SnippetDetailPage() {
  return (
    <SnippetBox>
      <DetailSnippet />
    </SnippetBox>
  );
};
