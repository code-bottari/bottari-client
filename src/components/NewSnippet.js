import styled, { css } from "styled-components";

import Button from "../components/common/Button";

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

export default function NewSnippet() {
  return (
    <SnippetToolWrapper>
      <InputContainer>
        <label>
          언어 선택
          <Select>
            <option hidden>언어 선택</option>
            {["Python", "Java", "JavaScript", "C#", "C/C++", "PHP", "R", "Objective-C"].map((language) => (
              <option>{language}</option>
            ))}
          </Select>
        </label>
        <label>
          해시태그
          <Input type="text" placeholder="#HashTag" />
        </label>
      </InputContainer>
      <div>
        에디터
      </div>
      <Button type="submit" name="edit" children="생성하기" />
    </SnippetToolWrapper>
  );
}
