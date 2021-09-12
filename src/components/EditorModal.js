import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "./common/Button";

const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(150, 150, 150, 0.3);
`;

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  width: 730px;
  height: 350px;
  border-radius: 50px;
  background-color: #F3F2F9;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
`;

const Label = styled.label`
  color: #543FD3;
  font-size: 14px;
`;

const Input = styled.input`
  display: block;
  width: 465px;
  height: 35px;
  padding-left: 10px;
  margin-top: 5px;
  border: 2px solid #543FD3;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
`;

export default function EditorModal({ onClick }) {
  const closeModal = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }

    onClick(false);
  };

  return (
    <ModalBackground onClick={closeModal}>
      <Editor>
        <Label>
          해시태그
          <Input type="text" />
        </Label>
        <Button variant="edit">저장하기</Button>
      </Editor>
    </ModalBackground>
  );
}

EditorModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
