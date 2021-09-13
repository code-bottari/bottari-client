import { useState } from "react";
import { useHistory } from "react-router";

import Button from "../../common/Button";
import ConfirmingDropdown from "./ConfirmingDropdown";

import { deleteData } from "../../../api/service";

import MESSAGES from "../../../constants/messages";

const { OK } = MESSAGES;

export default function SnippetDeleteButton() {
  const [isClicked, setClickStatus] = useState(false);

  const history = useHistory();

  const handleClickStatus = (boolean) => setClickStatus(boolean);

  const deletionHandler = async () => {
    try {
      const data = await deleteData("/snippets");

      if (data.result === OK) {
        history.push("/");
      }
    } catch (error) {
      alert(error.message); // 에러 처리
    }
  };

  return (
    <>
      <Button variant="tool" onClick={handleClickStatus}>삭제</Button>
      {isClicked && (
        <ConfirmingDropdown onCancelButtonClick={setClickStatus} onDeleteButtonClick={deletionHandler} />
      )}
    </>
  );
}
