import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../../Common/Button";

import UserProfile from "../../Snippet/UserProfile/UserProfile";
import HashtagList from "../../Snippet/HashtagList/HashtagList";

import { TOOL } from "../../../constants/variants";

const HeaderBox = styled.div`
  width: 700px;
  height: 95px;
  padding-bottom: 5px;
`;

const CreatorBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const TitleBox = styled.div`
  width: 700px;
  height: 35px;
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

export default function SnippetHeader({ profileUrl, nickname, follower, hashtags, language }) {
  return (
    <HeaderBox>
      <CreatorBox>
        <UserProfile
          profileUrl={profileUrl}
          nickname={nickname}
          follower={follower}
        />
        <Button variant={TOOL}>복사</Button>
      </CreatorBox>
      <TitleBox>
        <HashtagList
          type="preview"
          hashtags={hashtags}
        />
        <Language>{language}</Language>
      </TitleBox>
    </HeaderBox>
  );
}

SnippetHeader.propTypes = {
  profileUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  follower: PropTypes.array.isRequired,
  hashtags: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
};
