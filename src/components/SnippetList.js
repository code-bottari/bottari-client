import { nanoid } from "nanoid";
import styled from "styled-components";

import Snippet from "./Snippet";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ListBox = styled.div`
  width: 700px;
`;

export default function SnippetList({ snippets }) {
  return (
    <Wrapper>
      <ListBox>
        {snippets.map((data) => (
          <Snippet data={data} key={nanoid()} />
        ))}
      </ListBox>
    </Wrapper>
  );
}
