import styled from "styled-components";

import Button from "../../common/Button";

import VARIANTS from "../../../constants/variants";

const { TOOL } = VARIANTS;

const ToolWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
`;

export default function SnippetTool() {
  return (
    <ToolWrapper>
      {["저장", "복사", "공유", "삭제"].map((name) => <Button variant={TOOL}>{name}</Button>)}
    </ToolWrapper>
  );
}