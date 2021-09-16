import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import Button from "../../common/Button";
import SnippetSavingModal from "../../SnippetSavingModal";

import { deleteSnippet } from "../../../api/service";

import { TOOL } from "../../../constants/variants";
import { OK } from "../../../constants/messages";

import {
  COPY,
  SAVE,
  SHARE,
  DELETE,
} from "../../../constants/names";

const ToolWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
`;

export default function SnippetTool({ creator, language, code, snippetId }) {
  const history = useHistory();
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = async ({ target }) => {
    const buttonName = target.textContent;

    if (buttonName === SAVE) {
      setIsOpened(true);
      return;
    }

    if (buttonName === COPY) {
      await navigator.clipboard.writeText(code);

      alert("copied!");

      return;
    }

    if (buttonName === SHARE) {

      return;
    }

    if (buttonName === DELETE) {
      const { result } = await deleteSnippet({ id: snippetId });

      if (result === OK) {
        history.push("/");
      }
    }
  };

  return (
    <>
      <ToolWrapper>
        {[SAVE, COPY, SHARE, DELETE].map((name) => (
          <Button
            key={name}
            variant={TOOL}
            onClick={(event) => handleClick(event)}
          >
            {name}
          </Button>
        ))}
      </ToolWrapper>
      {isOpened && (
        <SnippetSavingModal
          creator={creator}
          language={language}
          code={code}
          onClick={setIsOpened}
        />
      )}
    </>
  );
}
