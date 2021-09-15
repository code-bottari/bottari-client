import AceEditor from "react-ace";
import styled from "styled-components";
import PropTypes from "prop-types";
import "ace-builds/webpack-resolver";

const StyledAceEditor = styled(AceEditor)`
  border-radius: 0px 0px 5px 5px;
`;

export default function Editor({ editorOptions, width, height, onEdit }) {
  const {
    language,
    theme,
    fontSize,
    readOnly,
    code,
    tab,
  } = editorOptions;

  const editCode = (value) => {
    onEdit(value);
  };

  return (
    <StyledAceEditor
      placeholder="이곳에 코드를 작성해 주세요!"
      name="editor"
      width={width}
      height={height}
      mode={language}
      theme={theme}
      fontSize={Number(fontSize)}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      wrapEnabled={true}
      readOnly={readOnly}
      defaultValue={code}
      setOptions={{
        showLineNumbers: true,
        tabSize: Number(tab),
      }}
      onChange={(value) => editCode(value)}
    />
  );
}

Editor.propTypes = {
  editorOptions: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
