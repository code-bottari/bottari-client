import styled from "styled-components";

const LogoImage = styled.img`
  width: 240px;
  height: 50px;
  margin-top: 20px;
  margin-left: 40px;
`;

export default function Logo() {
  return (
    <a href="/">
      <LogoImage src="images/logo.png" />
    </a>
  );
}
