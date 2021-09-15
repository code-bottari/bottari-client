import styled from "styled-components";
import PropTypes from "prop-types";

import Info from "../../Snippet/SnippetInfo/Info";

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  height: 50px;
`;

const Date = styled.div`
  width: 100px;
  height: 20px;
  padding-left: 15px;
  font-weight: bold;
`;

const SnippetInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function SnippetFooter({ createdAt, likeCount, commentCount }) {
  return (
    <FooterBox>
      <Date>{createdAt}</Date>
      <SnippetInfoWrapper>
        <Info type="like" image="/images/like.png" count={likeCount} />
        <Info type="comment" image="/images/comment.png" count={commentCount} />
      </SnippetInfoWrapper>
    </FooterBox>
  );
}

SnippetFooter.propTypes = {
  createdAt: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};
