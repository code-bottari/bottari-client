import { useState } from "react";

import styled from "styled-components";

import CONSTANTS from "../constants/constants";

const { SELECT_BOX_ARROW_URL } = CONSTANTS;

const Select = styled.select`
  appearance: none;
  width: 240px;
  height: 35px;
  padding: 5px 30px 5px 10px;
  border: 2px solid #543FD3;
  border-radius: 4px;
  outline: 0 none;
  background: url(${SELECT_BOX_ARROW_URL}) calc(100% - 5px) center no-repeat;
  background-size: 20px;
  text-align: center;
`;

const SelectOption = styled.option`
  padding: 3px 0;
  background: black;
  color: #fff;
`;

export default function LanguageSelectBox() {
  const [selected, setSelected] = useState("default");

  const handleChangeSelect = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Select variant="language" className="select" onChange={handleChangeSelect} value={selected}>
      {["Python", "Java", "JavaScript", "C#", "C/C++", "PHP", "R", "Objective-C"].map((language) => {
        return <SelectOption value={language}>{language}</SelectOption>;
      })}
    </Select>
  );
}
