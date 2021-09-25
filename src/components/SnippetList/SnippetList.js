import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import PropTypes from "prop-types";

import PreviewSnippet from "./PreviewSnippet/PreviewSnippet";
import Button from "../common/Button";

import { getSnippetList } from "../../api/service";

const Loading = styled.p`
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  margin: auto;
`;

export default function SnippetList({ page, onShowMoreButtonClick }) {
  const [snippets, setSnippets] = useState(null);

  const resource = { page };

  const {
    refetch,
    isLoading,
  } = useQuery("snippetList", async () => await getSnippetList(resource), {
    enabled: false,
  });

  useEffect(() => {
    (async () => {
      const { data } = await refetch();

      if (snippets === null) {
        setSnippets(data.snippetList);

        return;
      }

      setSnippets([...snippets, ...data.snippetList]);
    })();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, refetch]);

  if (isLoading) {
    return <Loading>로딩 중...</Loading>;
  }

  const handleButtonClick = async () => onShowMoreButtonClick(page + 1);

  return (
    <Wrapper>
      {snippets && snippets.map((snippet) => (
        <PreviewSnippet key={snippet._id} data={snippet} snippetId={snippet._id} />
      ))}
      <Button variant="utility" onClick={handleButtonClick} children="더 보기" />
    </Wrapper>
  );
}

SnippetList.propTypes = {
  page: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};
