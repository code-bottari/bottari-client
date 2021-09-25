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
  OTHERS,
} from "../../../constants/languages";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
`;

export default function NavigationBar() {
  const { search: defaultQuery } = useLocation();

  const languageList = [ALL, PYTHON, JAVA, JAVASCRIPT, CSHARP, C_CPP, PHP, R, OBJECTIVE_C, OTHERS];

  return (
    <NavigationWrapper>
      {languageList.map((language) => {
        const addedQuery = `language=${language}`;

        const query = getQuery(addedQuery, defaultQuery);

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
