import styled from "styled-components";
import PropTypes from "prop-types";

import Info from "../../Snippet/SnippetInfo/Info";

const FooterBox = styled.div`
  display: flex;
  width: 700px;
  height: 50px;
`;

const Date = styled.div`
  width: 100px;
  height: 20px;
  padding: 12px;
  margin-right: 440px;
  font-weight: bold;
`;

export default function SnippetFooter({ createdAt, likeCount, commentCount }) {
  return (
    <FooterBox>
      <Date>{createdAt}</Date>
      <Info type="like" image="/images/like.png" count={likeCount}/>
      <Info type="comment" image="/images/comment.png" count={commentCount}/>
    </FooterBox>
  );
}

SnippetFooter.propTypes = {
  createdAt: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};
