import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import EditorBar from "./EditorBar";
import Editor from "./Editor";

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function CodeEditor({ width, height, language, code, onEdit, onLanguageSelect }) {
  const [editorOptions, setEditorOption] = useState({
    language,
    theme: "monokai",
    fontSize: 14,
    readOnly: false,
    tab: 2,
    code,
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
      <EditorBar
        optionTypes={editorOptions}
        onOptionSelected={updateOption}
        width={width}
        height={height}
      />
      <Editor
        editorOptions={editorOptions}
        width={width}
        height={height}
        onEdit={onEdit}
      />
    </EditorWrapper>
  );
}

CodeEditor.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
