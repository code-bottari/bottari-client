import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import NotificationBar from "./NotificationBar";
import FollowingBar from "./FollowingBar";
import UserTap from "./UserTap";
import SelectBox from "../AligningSelectBox/AligningSelectBox";
import SnippetList from "../SnippetList/SnippetList";
import Button from "../Common/Button";

import { getUserData, getSnippet } from "../../api/service";

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

  const { id } = useParams();

  useEffect(() => {
    async function fetchData () {
      const userData = await getUserData(id);

      setUser(userData.user);

      const snippetsData = await getSnippet();

      setSnippets(snippetsData);
    }

    fetchData();
  }, [id]);

  const handleAllClick = () => {
    const allSnippets = snippets.filter((snippet) => snippet.creator === id || snippet.poster === id);

    setSnippets(allSnippets);
  };

  const handleMyClick = () => {
    const mySnippets = snippets.filter((snippet) => snippet.creator === id && snippet.poster === id);

    setSnippets(mySnippets);
  };

  const handleSavedClick = () => {
    const savedSnippets = snippets.filter((snippet) => snippet.creator !== id && snippet.poster === id);

    setSnippets(savedSnippets);
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
          <p>This is Following List</p>
        </FollowingBar>
        {user && <UserTap user={user} />}
      </Side>
      <Menu>
        <Button variant="filter" onClick={handleAllClick} children="ALL" />
        <Button variant="filter" onClick={handleMyClick} children="MY" />
        <Button variant="filter" onClick={handleSavedClick} children="SAVED" />
        <SelectBox />
      </Menu>
      <SnippetList snippets={snippets} />
    </Wrapper>
  );
}
