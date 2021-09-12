import styled from "styled-components";

import Button from "../../common/Button";

import VARIANTS from "../../../constants/variants";

const { TOOL } = VARIANTS;

const ToolWrapper = styled.div`
`;

export default function SnippetTool() {
  return (
    <ToolWrapper>
      <Button variant={TOOL}>저장</Button>
      <Button variant={TOOL}>복사</Button>
      <Button variant={TOOL}>공유</Button>
      <Button variant={TOOL}>삭제</Button>
    </ToolWrapper>
  );
}
