import styled from "styled-components";

const CommentInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 40px;
  border: 2px solid #543FD3;
  border-radius: 8px;
`;

const UserImage = styled.img`
  margin-right: 20px;
  margin-left: 10px;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
`;

const UserName = styled.div`
  width: 80px;
  margin-top: 4px;
  font-size: 20px;
  font-weight: bold;
`;

const InputArea = styled.input`
  width: 750px;
  height: 40px;
  padding-left: 10px;
  padding-bottom: 3px;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  font-size: 20px;
  outline: none;
`;

const SearchIcon = styled.img`
  width: 30px;
  height: 25px;
  margin-top: 1px;
  margin-left: 20px;
`;

export default function CommentInput() {
  return (
    <CommentInputBox>
      <UserImage src="/images/bottari.png" alt="프로필 이미지" width="25px" height="25px" />
      <UserName>Bottari</UserName>
      <InputArea />
      <SearchIcon src="/images/send_button.png" alt="프로필 이미지" width="25px" height="25px" />
    </CommentInputBox>
  );
}
