import { useEffect, useState } from "react";
import styled from "styled-components";

import { createComment, getUserData } from "../../api/service";

import { OK } from "../../constants/messages";

const CommentInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1100px;
  height: 40px;
  margin-bottom: 10px;
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
  width: 850px;
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
  cursor: pointer;
`;

export default function CommentInput({ snippetId }) {
  const [user, setUser] = useState();
  const [inputText, setInputText] = useState("");

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function getUser() {
      const { user } = await getUserData(userId);

      setUser(user);
    }

    getUser();
  }, []);

  const onChangeInput = (event) => {
    setInputText(event.target.value);
  };

  const onReset = () => {
    setInputText("");
  };

  const handleButtonClick = async () => {
    if (!inputText.length) {
      alert("한 글자 이상 작성해주세요.");

      return;
    }

    const resource = { userId, snippetId, comment: inputText };

    const response = await createComment(resource);

    if (response.result === OK) {
      alert("댓글이 작성되었습니다.");

      onReset();
    }
  };

  return (
    <CommentInputBox>
      {user &&
        <>
          <UserImage src={user.imageUrl} alt="프로필 이미지" width="25px" height="25px" />
          <UserName>{user.nickname}</UserName>
          <InputArea onChange={onChangeInput} />
          <SearchIcon src="/images/send_button.png" alt="프로필 이미지" width="25px" height="25px" onClick={() => handleButtonClick()} />
        </>
      }
    </CommentInputBox>
  );
}
