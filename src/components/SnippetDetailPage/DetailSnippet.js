import styled from "styled-components";

import HashtagList from "../Snippet/HashtagList/HashtagList";
import UserProfile from "../Snippet/UserProfile/UserProfile";
import SnippetTool from "../Snippet/SnippetTool/SnippetTool";
import SnippetInfo from "../Snippet/SnippetInfo/SnippetInfo";
import CodeEditor from "../CodeEditor/CodeEditor";

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  width: 1100px;
  height: 60px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  height: 60px;
`;

const Date = styled.div`
  width: 100px;
  height: 20px;
  padding-left: 15px;
  font-weight: bold;
`;

export default function DetailSnippet({ snippet }) {
  const { hashtagList, poster, language, likerList, commentList, createdAt, code } = snippet;
  const { nickname, imageUrl, followerList } = poster;

  const userId = localStorage.getItem("userId");
  const isLiked = likerList.indexOf(userId) !== -1;
  const isFollowed = followerList.indexOf(userId) !== -1;
  const formatDate = createdAt.slice(0, 10);

  return (
    <>
      <HashtagList
        type="detail"
        hashtags={hashtagList} />
      <CodeEditor width="1100px" height="400px" code={code} />
      <InfoWrapper>
        <UserProfile
          profileUrl={imageUrl}
          nickname={nickname}
          follower={followerList}
          isFollowed={isFollowed}
        />
        <SnippetInfo
          language={language}
          likeCount={likerList.length}
          commentCount={commentList.length}
          isLiked={isLiked}
        />
      </InfoWrapper>
      <Footer>
        <Date>{formatDate}</Date>
        <SnippetTool />
      </Footer>
    </>
  );
}
