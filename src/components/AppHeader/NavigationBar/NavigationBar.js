import styled from "styled-components";

import Button from "../../common/Button";

import LANGUAGES from "../../../constants/languages";

const { ALL,
  PYTHON,
  JAVA,
  JAVASCRIPT,
  PHP,
  R,
  OBJECTIVE_C,
  OTHERS
} = LANGUAGES;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

function NavigationBar() {

  const languageList = [ALL, PYTHON, JAVA, JAVASCRIPT, "C#", "C/C++", PHP, R, OBJECTIVE_C, OTHERS];

  return (
    <NavigationWrapper>
      {languageList.map((language) => {
        return <Button key={language} name="tool" >{language}</Button>;
      })}
    </NavigationWrapper>
  );
}

export default NavigationBar;
