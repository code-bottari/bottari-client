import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

import Snippet from "./PreviewSnippet/PreviewSnippet";

import { getSnippetList } from "../../api/service";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ListBox = styled.div`
  width: 700px;
`;

export default function SnippetList() {
  const { search } = useLocation();
  const [snippets, setSnippets] = useState();

  useEffect(() => {
    (async () => {
      const data = await getSnippetList(search);

      const { snippetList } = data;

      setSnippets(snippetList);
    })();
  }, [search]);

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
