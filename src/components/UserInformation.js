import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import SideBar from "./SideBar";
import UserTap from "./UserTap";
import SelectBox from "./SelectBox";
import SnippetList from "./SnippetList";
import Button from "./common/Button";

import { getData } from "../api/service";

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
  grid-template-columns: 120px 20px 120px 20px 120px 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  align-items: center;
  display: grid;
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
      const userData = await getData(`/users/${id}`);

      setUser(userData.user);

      const snippetsData = await getData("/snippets");

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
        <SideBar width={430} height="100vh" buttonPosition="20">
          <p>This is Notification List</p>
        </SideBar>
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
