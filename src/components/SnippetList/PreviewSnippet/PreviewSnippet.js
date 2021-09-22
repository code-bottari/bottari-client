import { Link } from "react-router-dom";
import { useQueryClient } from "react-query";
import styled from "styled-components";
import PropTypes from "prop-types";

import SnippetHeader from "./SnippetHeader";
import Editor from "../../CodeEditor/Editor";
import SnippetFooter from "./SnippetFooter";

import getDate from "../../../utils/getDate";

const SnippetBox = styled.div`
  width: 700px;
  height: 380px;
  margin: 20px 0px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

export default function PreviewSnippet({ data, snippetId, changedProfileImage, changedNickname }) {
  const { _id, poster, language, createdAt, likerList, commentList, code, hashtagList } = data;
  const { _id: posterId, imageUrl, nickname, followerList } = poster;

  const queryClient = useQueryClient();

  const userData = queryClient.getQueryData("user");

  const editorOptions = {
    language,
    theme: userData?.user.theme || "monokai",
    fontSize: 14,
    readOnly: true,
    code,
    tab: 2,
  };

  const dateFormat = getDate(createdAt);

  const userId = localStorage.getItem("userId");

  const isLiked = likerList.includes(userId);

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
          type="preview"
        />
      </Link>
      <SnippetFooter
        createdAt={dateFormat}
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
