import { useState } from "react";
import styled from "styled-components";

import EditorBar from "./EditorBar";
import Editor from "./Editor";

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function CodeEditor({ width, height }) {
  const [editorOption, setEditorOption] = useState({
    language: "javascript",
    theme: "monokai",
    fontSize: 14,
    tab: 2,
  });

  const updateOption = (optionName) => {
    return ({ target }) => {
      setEditorOption({
        ...editorOption,
        [optionName]: target.value,
      });
    };
  };

  return (
    <EditorWrapper>
      <EditorBar optionTypes={editorOption} onOptionSelected={updateOption} width={width} height={height} />
      <Editor editorOption={editorOption} width={width} height={height} />
    </EditorWrapper>
  );
}
