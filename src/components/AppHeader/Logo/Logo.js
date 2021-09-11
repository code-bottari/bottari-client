import styled from "styled-components";

const LogoImage = styled.img`
  width: 240px;
  height: 50px;
  margin-left: 30px;
`;

export default function Logo() {
  return (
    <a href="/">
      <LogoImage src="images/logo.png" />
    </a>
  );
}
