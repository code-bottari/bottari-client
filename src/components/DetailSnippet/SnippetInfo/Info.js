import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Button from "../../common/Button";

import VARIANTS from "../../../constants/variants";

const { ICON } = VARIANTS;

const buildStyle = ({
  cursor,
}) => css`
  cursor: ${cursor};
`;

const IconType = {
  like: {
    cursor: "pointer",
  },
  comment: {
    cursor: "default",
  },
};

const StyledInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 65px;
  height: 40px;
  margin: 0px 10px;

`;

const Number = styled.div`
  width: 35px;
  font-weight: bold;
  text-align: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;

  ${({ type }) => buildStyle(IconType[type])}
`;

export default function Info({ type, image }) {
  const isLike = type === "like";

  const handleLike = () => {
    // 좋아요 클릭 기능
  };

  return (
    <StyledInfoWrapper>
      <Button
        variant={ICON}
        onClick={isLike ? handleLike : undefined}
        children={<Icon type={type} src={image} />}
      />
      <Number>20</Number>
    </StyledInfoWrapper>
  );
}

Info.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
