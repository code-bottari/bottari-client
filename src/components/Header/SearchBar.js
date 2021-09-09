import styled from "styled-components";

import Button from "../common/Button";

const Wrapper = styled.div`
  margin-top: 25px;
  text-align: center;
`;

const SearchBox = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 40%;
  height: 25px;
  padding: 10px 10px 10px 60px;
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

const SearchButton = styled(Button)`
  position: absolute;
  width: 110px;
  height: 49px;
  right: 23%;
  border: none;
  border-radius: 10px;
  background: #8877E8;
  color: #FFFFFF;
  font-size: 20px;
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 35px;
  margin-top: 10px;
  height: 30px;
  left: 29%;
`;

export default function SearchBar() {
  return (
    <Wrapper>
      <SearchBox>
        <SearchInput type="text" placeholder="#HashTag" />
        <SearchButton type="submit" content="검 색" />
        <SearchIcon src={"images/search_icon.png"} alt="돋보기 아이콘" />
      </SearchBox>
    </Wrapper>
  );
};
