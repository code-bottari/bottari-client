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

export default function DetailSnippet() {
  const mockInfo = { // mock
    hashtags: ["#some", "#every"],
    profileUrl: "/images/like.png",
    nickname: "Sweet Potato",
    follower: 125,
    language: "Javascript",
    createdAt: "2020.10.10",
    likerList: ["1", "2"],
    commentList: ["1", "2"],
  };

  const {
    hashtags,
    profileUrl,
    nickname,
    follower,
    language,
    createdAt,
    likerList,
    commentList,
  } = mockInfo;

  return (
    <>
      <HashtagList
        type="detail"
        hashtags={hashtags} />
      <CodeEditor />
      <InfoWrapper>
        <UserProfile
          profileUrl={profileUrl}
          nickname={nickname}
          follower={follower}
        />
        <SnippetInfo
          language={language}
          likeCount={likerList.length}
          commentCount={commentList.length}
        />
      </InfoWrapper>
      <Footer>
        <Date>{createdAt}</Date>
        <SnippetTool />
      </Footer>
    </>
  );
}
