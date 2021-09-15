import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import DetailSnippet from "./DetailSnippet";

import { getSnippet } from "../../api/service";

const SnippetBox = styled.div`
  width: 1100px;
  margin: 15px auto;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

export default function SnippetDetailPage() {
  const [snippet, setSnippet] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getSnippet(id);

      const { snippet } = data;

      setSnippet(snippet);
    })();
  }, [id]);

  return (
    <SnippetBox>
      {snippet && <DetailSnippet snippet={snippet} />}
    </SnippetBox>
  );
};
