import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { useQuery, useQueryClient } from "react-query";
import styled from "styled-components";

import PreviewSnippet from "./PreviewSnippet/PreviewSnippet";

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
  const observingTarget = useRef();
  const queryClient = useQueryClient();

  const { data, refetch, isLoading } = useQuery("snippetList", async () => await getSnippetList(search));

  const a = queryClient.getQueryData("snippetList");
  // eslint-disable-next-line no-console
  console.log("aaa", a);
  const snippetList = data?.snippetList;

  useEffect(() => {
    const currentObservingTarget = observingTarget.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!snippetList.length) {
          refetch();

          return;
        };
      }
    });

    if (currentObservingTarget) {
      observer.observe(currentObservingTarget);
    }

    return () => observer && observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snippetList]);

  if (isLoading) {
    return <div>로딩중 입니다.</div>;
  }

  return (
    <Wrapper>
      <ListBox>
        {snippetList && snippetList.map((snippet) => (
          <PreviewSnippet key={snippet._id} data={snippet} snippetId={snippet._id} />
        ))}
        <div ref={observingTarget} />
      </ListBox>
    </Wrapper>
  );
}
