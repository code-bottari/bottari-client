import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import DetailSnippet from "./Snippet";

import { getSnippet } from "../../api/service";

const SnippetBox = styled.div`
  width: 1100px;
  margin: 15px auto;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

export default function SnippetDetailPage() {
  const [snippet, setSnippet] = useState({});
  const [userId, setUserId] = useState("");

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getSnippet(id);

      const { snippet, userId } = data; // 현재 로그인한 사용자 아이디를 가져오도록 백엔드 수정 필요

      setSnippet(snippet);
      setUserId(userId);
    })();
  }, [id]);

  return (
    <SnippetBox>
      {snippet && <DetailSnippet snippet={snippet} userId={userId} />}
    </SnippetBox>
  );
};
