import styled from "styled-components";

import Button from "../../Common/Button";

import VARIANTS from "../../../constants/variants";

const { SEARCH } = VARIANTS;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 5px 0px 5px 10px;
  border: solid rgba(134, 64, 249, 0.48);
  border-width: 2px 0px 2px 2px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0 2.5px 2.5px 0px rgba(0, 0, 0, 0.15);
`;

const SearchIcon = styled.img`
  width: 23px;
  height: 20px;
`;

const SearchInput = styled.input`
  padding: 0px 10px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export default function SearchBar() {
  return (
    <SearchWrapper>
      <SearchIcon src="/images/search_icon.png" alt="돋보기 아이콘" />
      <SearchInput type="text" placeholder="#HashTag" />
      <Button variant={SEARCH}>검 색</Button>
    </SearchWrapper>
  );
};
