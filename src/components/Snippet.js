import styled from "styled-components";

import SnippetFooter from "./SnippetFooter";
import SnippetHeader from "./SnippetHeader";

const SnippetBox = styled.div`
  width: 700px;
  height: 370px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

const CodeBox = styled.div`
  width: 700px;
  height: 230px;
  background-color: black;
`;

export default function Snippet() {
  return (
    <SnippetBox>
      <SnippetHeader />
      <CodeBox />
      <SnippetFooter />
    </SnippetBox>
  );
}
