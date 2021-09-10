import styled from "styled-components";

import SnippetHeader from "./SnippetHeader";
import SnippetFooter from "./SnippetFooter";

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
