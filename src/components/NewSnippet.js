import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { nanoid } from "nanoid";

import Button from "../components/common/Button";
import MESSAGES from "../constants/messages";

import validateHashtag from "../utils/validateHashtag";

const { OK } = MESSAGES;

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
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  label {
    margin: 15px;
    color: #543FD3;
    font-size: 14px;
    text-align: left;
  }
`;

const Select = styled.select`
  ${commonStyle}

  width: 240px;
  text-align: center;

  option {
    text-align: center;
  }
`;

const Input = styled.input`
  ${commonStyle}

  width: 470px;
`;

const Message = styled.p`
  font-size: 13px;
  margin-top: 5px;
  color: #EE0004;
  text-align: right;
`;

export default function NewSnippet() {
  const [failureReason, setFailureReason] = useState("");

  const hashtagInput = useRef();

  const handleButtonClick = () => {
    const hashtags = hashtagInput.current.value;
    const hashtagList = hashtags.split(" ");

    const validationResult = validateHashtag(hashtagList);

    if (validationResult !== OK) {
      setFailureReason(validationResult);
    }
  };

  return (
    <SnippetToolWrapper>
      <InputContainer>
        <label>
          언어 선택
          <Select>
            <option hidden>언어 선택</option>
            {["Python", "Java", "JavaScript", "C#", "C/C++", "PHP", "R", "Objective-C"].map((language) => (
              <option key={nanoid()}>{language}</option>
            ))}
          </Select>
        </label>
        <label>
          해시태그
          <Input type="text" placeholder="#HashTag" ref={hashtagInput} />
          <Message>{failureReason}</Message>
        </label>
      </InputContainer>
      <div>
        에디터
      </div>
      <Button type="submit" name="edit" onClick={() => handleButtonClick(hashtagInput)} children="생성하기" />
    </SnippetToolWrapper>
  );
}
