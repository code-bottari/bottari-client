import styled from "styled-components";

import Button from "../../common/Button";

import VARIANTS from "../../../constants/variants";
import LANGUAGES from "../../../constants/languages";

const { TOOL } = VARIANTS;

const {
  ALL,
  PYTHON,
  JAVA,
  JAVASCRIPT,
  CSHARP,
  C_CPP,
  PHP,
  R,
  OBJECTIVE_C,
  OTHERS
} = LANGUAGES;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
`;

function NavigationBar() {
  const languageList = [ALL, PYTHON, JAVA, JAVASCRIPT, CSHARP, C_CPP, PHP, R, OBJECTIVE_C, OTHERS];

  return (
    <NavigationWrapper>
      {languageList.map((language) => (
        <Button key={language} variant={TOOL} >{language}</Button>
      ))}
    </NavigationWrapper>
  );
}

export default NavigationBar;
