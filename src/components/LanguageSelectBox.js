import { useState } from "react";

import styled from "styled-components";

const Select = styled.select`
  appearance: none;
  width: 240px;
  height: 35px;
  padding: 5px 30px 5px 10px;
  border: 2px solid #543FD3;
  border-radius: 4px;
  outline: 0 none;
  background: url('https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png') calc(100% - 5px) center no-repeat;
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
    <Select name="language" className="select" onChange={handleChangeSelect} value={selected}>
      <SelectOption value="default" disabled>언어 선택</SelectOption>
      <SelectOption value="Python">Python</SelectOption>
      <SelectOption value="Java">Java</SelectOption>
      <SelectOption value="JavaScript">JavaScript</SelectOption>
      <SelectOption value="C#">#</SelectOption>
      <SelectOption value="C/C++">C/C++</SelectOption>
      <SelectOption value="PHP">PHP</SelectOption>
      <SelectOption value="R">R</SelectOption>
      <SelectOption value="Objective-C">Objective-C</SelectOption>
    </Select>
  );
}
