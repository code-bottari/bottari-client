import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const buildStyle = ({
  margin,
  border,
  borderRadius,
  backgroundColor,
  color,
  fontSize,
  whiteSpace,
  boxShadow,
  hoverBackgroundColor,
  hoverColor,
  hoverBoxShadow,
  activeBackgroundColor,
  activeBoxShadow,
  focusBackgroundColor,
  focusColor,
}) => css`
  margin: ${margin};
  border: ${border};
  border-radius: ${borderRadius};
  background-color: ${backgroundColor};
  color: ${color};
  font-size: ${fontSize};
  white-space: ${whiteSpace};
  box-shadow: ${boxShadow};

  &:hover {
    background-color: ${hoverBackgroundColor};
    color: ${hoverColor};
    box-shadow: ${hoverBoxShadow};
  }

  &:active {
    background-color: ${activeBackgroundColor};
    box-shadow: ${activeBoxShadow};
  }

  &:focus {
    background-color: ${focusBackgroundColor};
    color: ${focusColor};
  }
`;

const buttonType = {
  userMenu: {
    backgroundColor: "#AEA5DF",
    fontSize: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    hoverBackgroundColor: "#26BFA6",
    activeBackgroundColor: "#21A18C",
  },
  search: {
    backgroundColor: "#8877E8",
    fontSize: "20px",
    hoverBackgroundColor: "#26BFA6",
    activeBackgroundColor: "#21A18C",
  },
  home: {
    borderRadius: "5px",
    backgroundColor: "#9871B7",
    hoverBackgroundColor: "#26BFA6",
    activeBackgroundColor: "#21A18C",
  },
  edit: {
    border: "1px solid #C6CECD",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    color: "#9871B7",
    boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)",
    hoverBackgroundColor: "#9871B7",
    hoverColor: "#FFFFFF",
    activeBackgroundColor: "#26BFA6",
  },
  filter: {
    border: "1px solid #C6CECD",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    color: "#9871B7",
    fontSize: "20px",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.25)",
    focusBackgroundColor: "#9871B7",
    focusColor: "#FFFFFF",
  },
  notification: {
    border: "1px solid #AEA5DF",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontSize: "11px",
    boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.25)",
    hoverBoxShadow: "0px 2px 5px 3px rgba(0, 0, 0, 0.25)",
    activeBackgroundColor: "#DCF1EC",
  },
  tool: {
    margin: "1px",
    borderRadius: "3px",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    whiteSpace: "nowrap",
    hoverBoxShadow: "0px 2px 3px 1px rgba(0, 0, 0, 0.25)",
    activeBoxShadow: "inset 0px 1px 1px 1px rgba(0, 0, 0, 0.25)",
  },
  icon: {
    backgroundColor: "transparent",
  },
};

const StyledButton = styled.button`
  padding: 13px 20px;
  border: none;
  border-radius: 10px;
  background-color: #AEA5DF;
  color: #FFFFFF;
  font-size: 14px;
  line-height: 0.9;
  transition: 0.2s;

  ${({ name }) => buildStyle(buttonType[name])}
`;

export default function Button({
  type,
  name,
  onClick,
  children,
}) {
  return (
    <StyledButton
      type={type}
      name={name}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
};
