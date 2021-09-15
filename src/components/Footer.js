import styled from "styled-components";

import { COMPANY_INFORMATION, COMPANY_NAME } from "../constants/constants";

const Line = styled.hr`
  margin-top: 30px;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 30px;
  height: 70px;
`;

const Logo = styled.img`
  width: 170px;
  height: 35px;
  margin-right: 20px;
  opacity: 50%;
`;

const Text = styled.div`
  margin: 0 auto;
`;

export default function Footer() {
  return (
    <>
      <Line />
      <FooterWrapper>
        <Logo src={"images/logo.png"} />
        <Text>{COMPANY_NAME}</Text>
        <Text>{COMPANY_INFORMATION}</Text>
      </FooterWrapper>
    </>
  );
};
