import { useRef, useState } from "react";
import styled, { css } from "styled-components";

import CodeEditor from "../CodeEditor/CodeEditor";
import Button from "../Common/Button";

import validateHashtag from "../../utils/validateHashtag";

import { OK } from "../../constants/messages";

const commonStyle = css`
  display: block;
  height: 40px;
  padding-left: 10px;
  border: 2px solid #543FD3;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
`;

const SnippetToolWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 95px;

  label {
    margin: 15px;
    color: #543FD3;
    font-size: 14px;
    text-align: left;
  }
`;

const Input = styled.input`
  ${commonStyle}

  width: 470px;
`;

const Message = styled.p`
  margin-top: 5px;
  color: #EE0004;
  font-size: 13px;
  text-align: right;
`;

export default function NewSnippet() {
  const [failureReason, setFailureReason] = useState("");

  const hashtagInput = useRef();

  const handleButtonClick = () => {
    const hashtags = hashtagInput.current.value;
    const splitedHashtags = hashtags.split(" ");

    const validationResult = validateHashtag(splitedHashtags);

    if (validationResult !== OK) {
      setFailureReason(validationResult);
    }
  };

  return (
    <SnippetToolWrapper>
      <InputContainer>
        <label>
          해시태그
          <Input type="text" placeholder="#HashTag" ref={hashtagInput} />
          <Message>{failureReason}</Message>
        </label>
      </InputContainer>
      <CodeEditor width="1000px" height="500px" />
      <Button variant="edit" onClick={() => handleButtonClick(hashtagInput)} children="생성하기" />
    </SnippetToolWrapper>
  );
}
