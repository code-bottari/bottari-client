import styled from "styled-components";

import Button from "./common/Button";

import VARIANTS from "../constants/variants";

const { TOOL } = VARIANTS;

const HeaderBox = styled.div`
  width: 690px;
  height: 95px;
  padding-bottom: 5px;
`;

const CreatorBox = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 460px 80px;
  grid-template-rows: 25px 25px;
  grid-template-areas:
    "userImage userName . copyButton"
    "userImage subscriber . copyButton";
  align-items: center;
  justify-items: center;
  width: 690px;
  height: 50px;
  padding: 5px;

  & button {
    grid-area: copyButton;
  }
`;

const CreatorImage = styled.img`
  grid-area: userImage;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
`;

const CreatorName = styled.div`
  grid-area: userName;
  width: 80px;
  height: 20px;
  padding: 5px;
  font-weight: bold;
`;

const SubscriberImage = styled.img`
  grid-area: subscriber;
  width: 80px;
  height: 20px;
`;

const TitleBox = styled.div`
  width: 700px;
  height: 35px;
`;

const HashTag = styled.button`
  display: inline-block;
  width: 540px;
  height: 15px;
  margin: 10px;
  margin-right: 20px;
  border: 0;
  outline: 0;
  background: transparent;
  font-weight: bold;
  text-align: left;
`;

const Language = styled.div`
  display: inline-block;
  width: 100px;
  height: 10px;
  line-height: 12px;
  padding: 10px;
  background-color: black;
  border-radius: 13px;
  color: #FFFFFF;
  font-weight: bold;
  text-align: center;
`;

export default function SnippetHeader() {
  return (
    <HeaderBox>
      <CreatorBox>
        <CreatorImage src="/images/like.png" alt="프로필 이미지" width="40px" height="40px" />
        <CreatorName>James</CreatorName>
        <SubscriberImage src="images/Subscribers.png" />
        <Button variant={TOOL} children="복사" />
      </CreatorBox>
      <TitleBox>
        <HashTag>#LinkedList</HashTag>
        <Language>JavaScript</Language>
      </TitleBox>
    </HeaderBox>
  );
}
