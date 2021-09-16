import { useLocation } from "react-router";
import styled from "styled-components";

import PreviewSnippet from "./PreviewSnippet/PreviewSnippet";

import { getSnippetList } from "../../api/service";
import { useQuery } from "react-query";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ListBox = styled.div`
  width: 700px;
`;

export default function SnippetList() {
  const { search } = useLocation();

  const { data, isLoading } = useQuery("snippetList", async () => await getSnippetList(search));

  if (isLoading) {
    return <div>로딩중 입니다.</div>;
  }

  const { snippetList } = data;

  return (
    <Wrapper>
      <ListBox>
        {snippetList && snippetList.map((snippet) => (
          <PreviewSnippet key={snippet._id} data={snippet} snippetId={snippet._id} />
        ))}
      </ListBox>
    </Wrapper>
  );
}
