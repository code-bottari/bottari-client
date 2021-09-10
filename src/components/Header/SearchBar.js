import styled from "styled-components";

import Button from "../common/Button";

const SearchBox = styled.div`
  position: relative;
  text-align: center;
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 35px;
  height: 30px;
  margin-top: 8px;
  margin-left: 10px;
`;

const SearchInput = styled.input`
  width: 40%;
  height: 20px;
  padding: 10px 10px 10px 60px;
  margin-right: 10px;
  border: 2px solid rgba(134, 64, 249, 0.48);
  border-radius: 10px;
  background: #FFFFFF;
  caret-color: #8877E8;
  font-size: 20px;
  box-shadow: 0 2.5px 2.5px 0px rgba(0, 0, 0, 0.15);

  &:focus {
    outline: none;
  }
`;

export default function SearchBar() {
  return (
    <SearchBox>
      <SearchIcon src="images/search_icon.png" alt="돋보기 아이콘" />
      <SearchInput type="text" placeholder="#HashTag" />
      <Button type="submit" name="search" children="검 색" />
    </SearchBox>
  );
};
