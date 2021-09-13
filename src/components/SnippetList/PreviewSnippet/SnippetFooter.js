import styled, { css } from "styled-components";

import VARIANTS from "../../../constants/variants";

const { ICON } = VARIANTS;

const FooterBox = styled.div`
  display: flex;
  width: 700px;
  height: 50px;
`;

const IconButton = styled.button`
  width: 35px;
  height: 40px;
  padding-right: 0;
  margin-top: 2px;
  background-color: transparent;
  border: none;
`;

const IconImage = styled.img`
  width: 30px;
  height: 35px;
`;

const Date = styled.div`
  width: 80px;
  height: 20px;
  padding: 12px;
  margin-right: 440px;
  font-weight: bold;
`;

const Text = css`
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 12px 12px 12px 8px;
  font-weight: bold;
`;

const LikeNumber = styled.div`
  ${Text}
`;

const CommentNumber = styled.div`
  ${Text}
`;

export default function SnippetFooter() {
  return (
    <FooterBox>
      <Date>2020.10.10</Date>
      <IconButton variant={ICON}>
        <IconImage src="images/like.png" />
      </IconButton>
      <LikeNumber>20</LikeNumber>
      <IconButton variant={ICON}>
        <IconImage src="images/comment.png" />
      </IconButton>
      <CommentNumber>30</CommentNumber>
    </FooterBox>
  );
}
