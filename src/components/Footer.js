import styled from "styled-components";

import { COMPANY_INFORMATION, COMPANY_NAME } from "../constants/constants";

const FixedWrapper = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: white;
`;

const Line = styled.hr`
  margin-top: 0px;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 30px;
  height: 40px;
`;

const Logo = styled.img`
  width: 170px;
  height: 35px;
  margin-right: 20px;
  opacity: 50%;
`;

const Name = styled.p`
  margin-left: 80px;
  font-size: 19px
`;

const Information = styled.p`
  margin: 0 auto;
`;

export default function Footer() {
  return (
    <FixedWrapper>
      <Line />
      <FooterWrapper>
        <Logo src={"/images/logo.png"} />
        <Name>{COMPANY_NAME}</Name>
        <Information>{COMPANY_INFORMATION}</Information>
      </FooterWrapper>
    </FixedWrapper>
  );
};
