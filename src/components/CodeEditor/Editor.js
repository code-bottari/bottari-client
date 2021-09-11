import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";

export default function Editor({ editorOption, width, height }) {
  const {
    language,
    theme,
    fontSize,
    tab,
  } = editorOption;

  return (
    <AceEditor
      placeholder="이곳에 코드를 작성해 주세요!"
      name="editor"
      width={width}
      height={height}
      mode={language}
      theme={theme}
      fontSize={Number(fontSize)}
      showGutter={true}
      highlightActiveLine={true}
      wrapEnabled={true}
      setOptions={{
        showLineNumbers: true,
        tabSize: Number(tab),
      }}
    />
  );
}
