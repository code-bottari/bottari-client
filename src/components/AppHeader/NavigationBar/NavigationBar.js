import styled from "styled-components";

import Button from "../../Common/Button";

import { TOOL } from "../../../constants/variants";

import {
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
} from "../../../constants/languages";

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
