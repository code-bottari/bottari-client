import { nanoid } from "nanoid";
import styled from "styled-components";

const SelectBoxWrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  display: inline-block;
  font-size: 8px;
`;

const Select = styled.select`
  display: block;
  height: 30px;
  border: none;
  background-color: #272822;
  color: #FFFFFF;
`;

const themeLanguages = ["python", "java", "javascript", "csharp", "c_cpp", "php", "r", "objectivec"];
const selectBoxLanguages = ["Python", "Java", "JavaScript", "C#", "C/C++", "PHP", "R", "Objective-C"];
const themes = ["monokai", "xcode", "dracula", "eclipse", "tomorrow", "github", "solarized_dark", "solarized_light", "terminal"];
const fontSizes = [14, 16, 18, 20, 24, 28, 32, 40];
const tabs = [2, 4];

export default function EditorSelectBox({ optionTypes, onOptionSelected, width }) {
  const {
    language,
    theme,
    fontSize,
    tab,
  } = optionTypes;

  return (
    <SelectBoxWrapper style={{ "width": width }}>
      <Label>
        언어
        <Select
          onChange={onOptionSelected("language")}
          value={language}
        >
          {selectBoxLanguages.map((language, index) => (
            <option value={themeLanguages[index]} key={nanoid()}>{language}</option>
          ))}
        </Select>
      </Label>
      <Label>
        테마
        <Select
          onChange={onOptionSelected("theme")}
          value={theme}
        >
          {themes.map((theme) => (
            <option key={nanoid()}>{theme}</option>
          ))}
        </Select>
      </Label>
      <Label>
        폰트 크기
        <Select
          onChange={onOptionSelected("fontSize")}
          value={fontSize}
        >
          {fontSizes.map((size) => (
            <option key={nanoid()}>{size}</option>
          ))}
        </Select>
      </Label>
      <Label>
        탭 수
        <Select
          onChange={onOptionSelected("tab")}
          value={tab}
        >
          {tabs.map((tab) => (
            <option key={nanoid()}>{tab}</option>
          ))}
        </Select>
      </Label>
    </SelectBoxWrapper>
  );
}
