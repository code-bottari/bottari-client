import React from "react";
import styled from "styled-components";

import Input from "../common/Input";
import Button from "../common/Button";

const Shadow = styled.div`
  margin-top: 24px;
`;

const SearchInput = styled(Input)`
  position: absolute;
  width: 726px;
  height: 40px;
  left: 398px;
  padding-left: 60px;

  background: #FFFFFF;
  border: 2px solid rgba(134, 64, 249, 0.48);
  box-sizing: border-box;
  border-radius: 10px;

  font-size: 20px;
  caret-color: #8877E8;
  box-shadow: 0 2.5px 2.5px 0px rgba(0, 0, 0, 0.15);

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled(Button)`
  position: absolute;
  width: 117px;
  height: 40px;
  left: 1007px;

  color: #FFFFFF;
  background: #8877E8;
  border: none;
  border-radius: 10px;

  font-size: 20px;
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 26px;
  height: 22px;
  left: 418px;
  top: 35px;
`;

export default function SearchBar () {
  return (
    <Shadow>
      <SearchInput type="text" placeholder="#HashTag" />
      <SearchButton type="submit" content="검 색" />
      <SearchIcon src={"images/search_icon.png"} alt="돋보기 아이콘" />
    </Shadow>
  );
};
