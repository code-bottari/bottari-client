import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const buildSelectBoxColor = (backgroundColor, color) => css`
  background-color: ${backgroundColor};
  color: ${color};
`;

const buildBarBackgroundColor = (backgroundColor, color) => css`
  background-color: ${backgroundColor};
  color: ${color};
`;

const themeType = {
  monokai: ["#272822", "#FFFFFF"],
  xcode: ["#FFFFFF", "#008E00"],
  dracula: ["#282a36", "#6272a4"],
  eclipse: ["#FFFFFF", "#719682"],
  tomorrow: ["#FFFFFF", "#8E908C"],
  github: ["FFFFFF", "#999988"],
  solarized_dark: ["#002B36", "#657B83"],
  solarized_light: ["#FDF6E3", "#93A1A1"],
  terminal: ["#000000", "#FF5349"],
};

const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  border-radius: 5px 5px 0px 0px;

  ${({ theme }) => buildBarBackgroundColor(...themeType[theme])}
`;

const Label = styled.label`
  display: inline-block;
  margin-top: 8px;
  font-size: 8px;
`;

const Select = styled.select`
  display: block;
  height: 30px;
  margin: 0px 20px;
  border: none;
  outline: none;

  ${({ theme }) => buildSelectBoxColor(...themeType[theme])}
`;

const themeLanguages = ["python", "java", "javascript", "csharp", "c_cpp", "php", "r", "objectivec"];
const selectBoxLanguages = ["Python", "Java", "JavaScript", "C#", "C/C++", "PHP", "R", "Objective-C"];
const themes = ["monokai", "xcode", "dracula", "eclipse", "tomorrow", "github", "solarized_dark", "solarized_light", "terminal"];
const fontSizes = [14, 16, 18, 20, 24, 28, 32, 40];
const tabs = [2, 4];

export default function EditorBar({ optionTypes, onOptionSelected, width }) {
  const {
    language,
    theme,
    fontSize,
    tab,
  } = optionTypes;

  return (
    <SelectBoxWrapper theme={theme} style={{ "width": width }}>
      <Label>
        언어
        <Select
          theme={theme}
          onChange={onOptionSelected("language")}
          value={language}
        >
          {selectBoxLanguages.map((language, index) => (
            <option value={themeLanguages[index]} key={language}>{language}</option>
          ))}
        </Select>
      </Label>
      <Label>
        테마
        <Select
          theme={theme}
          onChange={onOptionSelected("theme")}
          value={theme}
        >
          {themes.map((theme) => (
            <option key={theme}>{theme}</option>
          ))}
        </Select>
      </Label>
      <Label>
        폰트 크기
        <Select
          theme={theme}
          onChange={onOptionSelected("fontSize")}
          value={fontSize}
        >
          {fontSizes.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </Select>
      </Label>
      <Label>
        탭 수
        <Select
          theme={theme}
          onChange={onOptionSelected("tab")}
          value={tab}
        >
          {tabs.map((tab) => (
            <option key={tab}>{tab}</option>
          ))}
        </Select>
      </Label>
    </SelectBoxWrapper>
  );
}

EditorBar.propTypes = {
  optionTypes: PropTypes.shape({
    language: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    tab: PropTypes.number.isRequired,
  }),
  onOptionSelected: PropTypes.func.isRequired,
  width: PropTypes.string,
};
