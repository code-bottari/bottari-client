import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { useQuery } from "react-query";
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

  const { data, refetch, isLoading } = useQuery("snippetList", async () => await getSnippetList(search));

  const snippetList = data?.snippetList;

  const getExtraSnippetList = () => {
    if (!snippetList.length) {
      refetch();

      return;
    }
  };

  const handleObserver = ([entry]) => {
    if (entry.isIntersecting) {
      getExtraSnippetList();
    }
  };

  useEffect(() => {
    const currentObservingTarget = observingTarget.current;

    const observer = new IntersectionObserver(handleObserver);

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
