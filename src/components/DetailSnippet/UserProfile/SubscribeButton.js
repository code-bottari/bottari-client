import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const buildStyle = ({
  border,
  backgroundColor,
}) => css`
  border: ${border};
  background-color: ${backgroundColor};
`;

const MarkType = {
  default: {
    border: "1px solid #999090",
    backgroundColor: "#999090",
  },
  subscription: {
    border: "1px solid #F9675D",
    backgroundColor: "#F9675D",
  },
};

const SubscriberType = {
  default: {
    border: "1px solid #999090",
  },
  subscription: {
    border: "1px solid #F9675D",
  },
};

const StyledSubscribeButton = styled.button`
  display: flex;
  border: none;
  border-radius: 5px;
  padding: 0px;
  background-color: white;
  cursor: pointer;
`;

const StyledSubscribeMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 19px;
  border-radius: 5px 0px 0px 5px;
  padding-left: 2px;

  ${({ variant }) => buildStyle(MarkType[variant])}
`;

const StyledSubscriber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51px;
  height: 19px;
  border-radius: 0px 5px 5px 0px;

  ${({ variant }) => buildStyle(SubscriberType[variant])}
`;

const Mark = styled.img`
  width: 15px;
  height: 15px;
`;

export default function SubscribeButton({ variant, count }) {
  return (
    <StyledSubscribeButton variant={variant}>
      <StyledSubscribeMark variant={variant}>
        <Mark src="images/subscribeMark.png" alt="구독 마크" />
      </StyledSubscribeMark>
      <StyledSubscriber variant={variant}>
        {count}
      </StyledSubscriber>
    </StyledSubscribeButton>
  );
};

SubscribeButton.propTypes = {
  variant: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
