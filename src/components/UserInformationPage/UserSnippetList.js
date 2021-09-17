import styled from "styled-components";

import PreviewSnippet from "../SnippetList/PreviewSnippet/PreviewSnippet";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ListBox = styled.div`
  width: 700px;
`;

export default function UserSnippetList({ snippets }) {
  return (
    <Wrapper>
      <ListBox>
        {snippets && snippets.map((snippet) => (
          <PreviewSnippet key={snippet._id} data={snippet} />
        ))}
      </ListBox>
    </Wrapper>
  );
}
