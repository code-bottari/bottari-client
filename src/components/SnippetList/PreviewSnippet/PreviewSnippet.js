import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import SnippetHeader from "./SnippetHeader";
import SnippetFooter from "./SnippetFooter";
import Editor from "../../CodeEditor/Editor";

const SnippetBox = styled.div`
  width: 700px;
  height: 380px;
  margin: 20px 0px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

export default function PreviewSnippet({ data, snippetId, changedProfileImage, changedNickname }) {
  const { _id, poster, language, createdAt, likerList, commentList, code, hashtagList } = data;
  const { _id: posterId, imageUrl, nickname, followerList } = poster;

  const formatDate = createdAt.slice(0, 10);

  const userId = localStorage.getItem("userId");

  const isLiked = likerList.includes(userId);

  const editorOptions = {
    language: language.toLowerCase(),
    theme: "monokai", // react-query로 데이터 받아오기
    fontSize: 14,
    readOnly: true,
    code,
    tab: 2,
  };

  return (
    <SnippetBox>
      <SnippetHeader
        posterId={posterId}
        profileUrl={changedProfileImage || imageUrl}
        nickname={changedNickname || nickname}
        follower={followerList}
        language={language}
        code={code}
        hashtags={hashtagList}
      />
      <Link to={`/snippets/${_id}`}>
        <Editor
          editorOptions={editorOptions}
          width="700px"
          height="230px"
        />
      </Link>
      <SnippetFooter
        createdAt={formatDate}
        likeCount={likerList.length}
        commentCount={commentList.length}
        isLiked={isLiked}
        snippetId={snippetId}
      />
    </SnippetBox>
  );
}

PreviewSnippet.propTypes = {
  data: PropTypes.object.isRequired,
  snippetId: PropTypes.string.isRequired,
};
