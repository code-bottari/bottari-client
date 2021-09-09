import { useState } from "react";

import styled from "styled-components";

import URL from "../constants/url";

const { SELECT_BOX_ARROW } = URL;

const Select = styled.select`
  appearance: none;
  width: 120px;
  height: 30px;
  padding: 5px 30px 5px 10px;
  border: 2px solid #543FD3;
  border-radius: 4px;
  outline: 0 none;
  background: url(${SELECT_BOX_ARROW}) calc(100% - 5px) center no-repeat;
  background-size: 20px;
`;

const SelectOption = styled.option`
  padding: 3px 0;
  background: black;
  color: #fff;
`;

export default function SelectBox() {
  const [selected, setSelected] = useState("default");

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Select name="sort" className="select" onChange={handleSelect} value={selected}>
      <SelectOption value="default" disabled>정렬 순서</SelectOption>
      <SelectOption value="latest">최신순</SelectOption>
      <SelectOption value="like">좋아요 많은 순</SelectOption>
      <SelectOption value="comment">댓글 많은 순</SelectOption>
    </Select>
  );
}
