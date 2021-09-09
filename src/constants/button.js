import { css } from "styled-components";

const userModalButton = css`
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 20px;
`;

const buttonHover = css`
  transition: 0.2s;
  background-color: #26BFA6;
`;

export const button = {
  userModalButton,
  buttonHover,
};
