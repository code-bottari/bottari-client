import styled from "styled-components";

import Button from "./common/Button";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

function NavigationBar() {
  const languageList = ["All", "Python", "Java", "JavaScript", "C#", "C/C++", "PHP", "R", "Objective-C", "Others"];

  return (
    <NavigationWrapper>
      {languageList.map((language) => {
        return <Button key={language} name="tool" >{language}</Button>;
      })}
    </NavigationWrapper>
  );
}

export default NavigationBar;
