import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../../common/Button";

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
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 35px;
`;

const Language = styled.div`
  width: 120px;
  height: 23px;
  padding-top: 7px;
  margin: 0px 15px;
  border-radius: 20px;
  background-color: black;
  color: #FFFFFF;
  font-weight: bold;
  text-align: center;
`;

export default function SnippetHeader({ posterId, profileUrl, nickname, follower, language, code, hashtags }) {
  const userId = localStorage.getItem("userId");
  const isFollowed = follower.includes(userId);

  const handleClick = async () => {
    await navigator.clipboard.writeText(code);

    alert("copied!");

    return;
  };

  return (
    <HeaderBox>
      <CreatorBox>
        <UserProfile
          posterId={posterId}
          profileUrl={profileUrl}
          nickname={nickname}
          follower={follower}
          isFollowed={isFollowed}
        />
        <Button variant={TOOL} onClick={handleClick}>복사</Button>
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
  posterId: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  follower: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  hashtags: PropTypes.array.isRequired,
};
