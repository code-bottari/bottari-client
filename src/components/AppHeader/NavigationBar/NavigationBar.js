import { useLocation } from "react-router";
import styled from "styled-components";

import Button from "../../common/Button";

import getQuery from "../../../utils/getQuery";

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
  const { search } = useLocation();

  const languageList = [ALL, PYTHON, JAVA, JAVASCRIPT, CSHARP, C_CPP, PHP, R, OBJECTIVE_C, OTHERS];

  return (
    <NavigationWrapper>
      {languageList.map((language) => {
        const formatLanguage = `language=${language}`;

        const query = getQuery(formatLanguage, search);

        return (
          <a key={language} href={query}>
            <Button
              variant={TOOL}
            >
              {language}
            </Button>
          </a>
        );
      })}
    </NavigationWrapper>
  );
}

export default NavigationBar;
