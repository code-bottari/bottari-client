import styled from "styled-components";

import HashtagList from "../Snippet/HashtagList/HashtagList";
import UserProfile from "../Snippet/UserProfile/UserProfile";
import SnippetTool from "../Snippet/SnippetTool/SnippetTool";
import SnippetInfo from "../Snippet/SnippetInfo/SnippetInfo";

const CodeEditor = styled.div`
  width: 1100px;
  height: 300px;
  background-color: black;
`;

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
  width: 80px;
  height: 20px;
  padding-left: 15px;
  font-weight: bold;
`;

export default function DetailSnippet({ snippet, userId }) {
  const { hashtagList, poster, language, likerList, commentList, createdAt } = snippet;
  const { nickname, imageUrl, followerList } = poster;

  const isLiked = likerList.indexOf(userId) !== -1;
  const isFollowed = followerList.indexOf(userId) !== -1;

  return (
    <>
      <HashtagList
        type="detail"
        hashtags={hashtagList} />
      <CodeEditor />
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
        <Date>{createdAt}</Date>
        <SnippetTool />
      </Footer>
    </>
  );
}
