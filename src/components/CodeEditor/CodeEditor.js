import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import EditorBar from "./EditorBar";
import Editor from "./Editor";

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px 40px 0px;
`;

export default function CodeEditor({ width, height }) {
  const [editorOptions, setEditorOption] = useState({
    language: "javascript",
    theme: "monokai",
    fontSize: 14,
    tab: 2,
  });

  const updateOption = (optionName) => {
    return ({ target }) => {
      setEditorOption({
        ...editorOptions,
        [optionName]: target.value,
      });
    };
  };

  return (
    <EditorWrapper>
      <EditorBar optionTypes={editorOptions} onOptionSelected={updateOption} width={width} height={height} />
      <Editor editorOptions={editorOptions} width={width} height={height} />
    </EditorWrapper>
  );
}

CodeEditor.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
