import { useRef, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import Button from "./common/Button";

import validateHashtag from "../utils/validateHashtag";

import { EDIT, TOOL } from "../constants/variants";
import { OK } from "../constants/messages";

import { createSnippet } from "../api/service";

const Modal = styled.div`
  width: 800px;
  height: 400px;
  padding: 10px 15px;
  margin: 0 auto;
  border-radius: 30px;
  background-color: var(--color-saving-background);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

  button {
    margin-left: 340px
  }
`;

const Label = styled.label`
  display: block;
  width: 600px;
  margin: 120px auto 60px auto;
  color: #543FD3;
  font-size: 12px;
`;

const Input = styled.input`
  display: block;
  width: 600px;
  height: 30px;
  margin: 0 auto;
  padding-left: 5px;
  border: 2px solid #543FD3;
  border-radius: 4px;
  outline: none;
  transition: 0.2s;

  &:focus {
    border: 2px solid #26BFA6;
  }

  &::placeholder {
    font-size: 14px;
  }
`;

const Message = styled.p`
  margin-top: 5px;
  color: #EE0004;
  font-size: 13px;
  text-align: right;
`;

export default function SaveSnippet({ snippet, userId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [failureReason, setFailureReason] = useState("");

  const hashtagInput = useRef();
  const history = useHistory();

  const { creator, language, code } = snippet;

  const saveSnippet = async (hashtagList) => {
    const data = {
      creator,
      poster: userId,
      language,
      code,
      hashtagList
    };

    const savedSnippet = await createSnippet(data);

    if (savedSnippet.result === OK) {
      const id = savedSnippet._id;

      history.push(`/snippets/${id}`);
    }
  };

  const handleButtonClick = async () => {
    const hashtags = hashtagInput.current.value;
    const splitedHashtags = hashtags.split(" ");

    const validationResult = validateHashtag(splitedHashtags);

    if (validationResult) {
      setFailureReason(validationResult);

      return;
    }

    await saveSnippet(splitedHashtags);
  };

  return (
    <>
      <Button variant={TOOL} onClick={() => setIsOpen(true)}>저장</Button>
      {isOpen && (
        <Modal>
          <Label>
            해시태그
            <Input type="text" placeholder="#HashTag #InfiniteScroll" ref={hashtagInput} />
            <Message>{failureReason}</Message>
          </Label>
          <Button variant={EDIT} onClick={() => handleButtonClick(hashtagInput)}>저장하기</Button>
        </Modal>
      )}
    </>
  );
}
