import styled from "styled-components";

const NicknameWrapper = styled.div`
  padding: 0px 80px;
`;

const Label = styled.label`
  font-size: 10px;
  margin-bottom: 0px;
  color: #543FD3;
`;

const Input = styled.input`
  width: 150px;
  height: 20px;
  border: 2px solid #543FD3;
  border-radius: 4px;
  outline: none;
  transition: 0.2s;

  &:focus {
    border: 2px solid #26BFA6;
  }

  &::placeholder {
    font-size: 30%;
  }
`;

const Message = styled.p`
  font-size: 10px;
  margin: 0px;
  color: #543FD3;
  text-align: right;
`;

export default function Nickname({ reference, message, name }) {
  return (
    <NicknameWrapper>
      <Label>
        닉네임
        <Input type="text" placeholder="닉네임을 입력해 주세요." name={name} ref={reference} />
      </Label>
      <Message>{message}</Message>
    </NicknameWrapper>
  );
}
