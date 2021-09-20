import { useState } from "react/cjs/react.development";
import styled from "styled-components";

import Button from "../common/Button";
import Dropdown from "../common/Dropdown";

import { deleteComment } from "../../api/service";

import { LIST } from "../../constants/variants";

import {
  DELETE_COMMENT_SUCCEEDED,
  OK,
} from "../../constants/messages";

const DropdownWrapper = styled.div`
  position: absolute;
  right: -130px;
  z-index: 100;
  border-radius: 5px;
`;

export default function CommentOptionDropdown({ commentId, snippetId, userId, updateCommentList, setIsEditable }) {
  const [idOpened, setIsOpened] = useState(true);

  const handleCommentOptionButton = async (buttonName) => {
    if (buttonName === "수정") {
      setIsEditable(true);
      setIsOpened(false);
    }

    if (buttonName === "삭제") {
      const response = await deleteComment({ userId, commentId, snippetId });

      if (response.result === OK) {
        alert(DELETE_COMMENT_SUCCEEDED);

        updateCommentList(true);
      }

      setIsOpened(false);
    }
  };

  const commentOptionList = ["수정", "삭제"].map((text) => (
    <Button
      variant="commentOption"
      onClick={() => handleCommentOptionButton(text)}
      key={text}
    >
      {text}
    </Button >
  ));

  return (
    <DropdownWrapper>
      {idOpened && (
        <Dropdown variant={LIST} children={commentOptionList} />
      )}
    </DropdownWrapper>
  );
}
