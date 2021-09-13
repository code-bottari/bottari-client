import { useEffect, useState } from "react";
import styled from "styled-components";

import Snippet from "./PreviewSnippet/Snippet";

import { getData } from "../../api/service";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ListBox = styled.div`
  width: 700px;
`;

export default function SnippetList() {
  const [snippets, setSnippets] = useState();

  useEffect(() => {
    (async () => {
      const data = await getData("/snippets");

      const { snippetList } = data;

      setSnippets(snippetList);
    })();
  }, []);

  return (
    <Wrapper>
      <ListBox>
        {snippets && snippets.map((snippet) => (
          <Snippet key={snippet._id} data={snippet} />
        ))}
      </ListBox>
    </Wrapper>
  );
}
