import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Button from "../../common/Button";

import { ICON } from "../../../constants/variants";

const buildStyle = ({ cursor }) => css`
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

const Count = styled.div`
  width: 35px;
  font-weight: bold;
  text-align: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;

  ${({ type }) => buildStyle(IconType[type])}
`;

export default function Info({ type, image, count }) {
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
      <Count>{count}</Count>
    </StyledInfoWrapper>
  );
}

Info.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
