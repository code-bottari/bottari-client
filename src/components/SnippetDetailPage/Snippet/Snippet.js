import styled from "styled-components";
import SnippetTool from "../../DetailSnippet/SnippetTool/SnippetTool";
import SnippetInfo from "../../DetailSnippet/SnippetInfo/SnippetInfo";
import TitleHashtag from "../../DetailSnippet/TitleHashtag/TitleHashtag";
import UserProfile from "../../DetailSnippet/UserProfile/UserProfile";

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
  const mockInfo = {
    hashtags: ["#some", "#every"],
    profileUrl: "/images/like.png",
    nickname: "Sweet Potato",
    subscriber: 125,
    language: "Javascript",
    createdAt: "2020.10.10",
  };

  const { hashtags,
    profileUrl,
    nickname,
    subscriber,
    language,
    createdAt,
  } = mockInfo;

  return (
    <>
      <TitleHashtag hashtags={hashtags} />
      <CodeEditor />
      <InfoWrapper>
        <UserProfile
          profileUrl={profileUrl}
          nickname={nickname}
          subscriber={subscriber}
        />
        <SnippetInfo language={language} />
      </InfoWrapper>
      <Footer>
        <Date>{createdAt}</Date>
        <SnippetTool />
      </Footer>
    </>
  );
}
