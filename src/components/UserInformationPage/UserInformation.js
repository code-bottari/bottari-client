import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import NotificationBar from "./NotificationBar";
import FollowingBar from "./FollowingBar";
import UserTab from "./UserTab";
import SelectBox from "../AligningSelectBox/AligningSelectBox";
import UserSnippetList from "./UserSnippetList";
import Button from "../common/Button";
import FollowingList from "./FollowingList";

import { getUserData, getUserSnippetList } from "../../api/service";

import {
  ALL,
  MY,
  SAVED
} from "../../constants/filters";

import { FILTER } from "../../constants/variants";

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 430px 1fr;
  grid-template-rows: 100px 1fr;
  justify-items: center;
  margin-top: 20px;

  * {
    &:first-child {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    }

    &:nth-child(2) {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    &:nth-child(3) {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }
`;

const Side = styled.div`
  display: flex;
  position: absolute;
  height: 2000px;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: 120px 20px 120px 20px 120px 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  align-items: center;
  width: 700px;

  * {
    &:first-child {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    &:nth-child(2) {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    &:nth-child(3) {
      grid-column-start: 5;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    &:nth-child(4) {
      grid-column-start: 7;
      grid-column-end: 8;
      grid-row-start: 1;
      grid-row-end: 2;
    }
  }
`;

export default function UserInformation() {
  const [user, setUser] = useState();
  const [snippets, setSnippets] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  const [nickname, setNickname] = useState(user?.nickname);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData () {
      const userData = await getUserData(id);
      const snippetsData = await getUserSnippetList(id);

      setUser(userData.user);
      setSnippets(snippetsData.snippetList);
      setFiltered(snippetsData.snippetList);
    }

    fetchData();
  }, [id]);

  const changeProfileImage = (image) => {
    setProfileImage(image);
  };

  const changeNickname = (nickname) => {
    setNickname(nickname);
  };

  const handleFilterClick = (filter) => {
    let filteredSnippets;

    if (filter === ALL) {
      filteredSnippets = snippets.filter((snippet) => snippet.poster._id === id || snippet.creator._id === id);
    }

    if (filter === MY) {
      filteredSnippets = snippets.filter((snippet) => snippet.creator._id === id && snippet.poster._id === id);
    }

    if (filter === SAVED) {
      filteredSnippets = snippets.filter((snippet) => snippet.creator._id !== id && snippet.poster._id === id);
    }

    setFiltered(filteredSnippets);
  };

  return (
    <Wrapper>
      <Side>
        <NotificationBar width={430} height="100vh">
          <Button variant="notification">단오님께서 00님의 글에 좋아요를 누르셨습니다.</Button>
          <Button variant="notification">한나님께서 00님의 글에 좋아요를 누르셨습니다.</Button>
          <Button variant="notification">환님께서 00님의 글에 좋아요를 누르셨습니다.</Button>
        </NotificationBar>
        <FollowingBar width={430} height="100vh">
          <FollowingList />
        </FollowingBar>
        {user && (
          <UserTab
            user={user}
            changeUserImage={changeProfileImage}
            changeNickname={changeNickname}
            changedNickname={nickname}
          />
        )}
      </Side>
      <Menu>
        {[ALL, MY, SAVED].map((filter) => (
          <Button key={filter} variant={FILTER} onClick={() => handleFilterClick(filter)} children={filter} />
        ))}
        <SelectBox />
      </Menu>
      <UserSnippetList snippets={filtered} profileImage={profileImage} nickname={nickname} />
    </Wrapper>
  );
}
