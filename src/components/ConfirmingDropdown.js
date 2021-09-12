import { useState } from "react";
import PropTypes from "prop-types";

import Dropdown from "../components/common/Dropdown";
import Button from "./common/Button";

import { deleteData } from "../api/service";

import VARIANTS from "../constants/variants";
import NAMES from "../constants/names";

const {
  CONFIRM,
  UTILITY,
} = VARIANTS;

const {
  CANCEL,
  DELETE,
} = NAMES;

const buttonNames = [CANCEL, DELETE];

export default function ConfirmingDropdown({ path, resource }) {
  const [isOpen, setOpenStatus] = useState(true);

  const handleClick = ({ target }) => {
    if (target.textContent === CANCEL) {
      setOpenStatus(false);

      return;
    }

    deleteData(path, resource);
  };

  return (
    <>
      {isOpen && (
        <Dropdown variant={CONFIRM}>
          <p>정말로 삭제하시겠습니까?</p>
          <div onClick={handleClick}>
            {buttonNames.map((name) => <Button variant={UTILITY} key={name}>{name}</Button>)}
          </div>
        </Dropdown>
      )}
    </>
  );
}

ConfirmingDropdown.propTypes = {
  path: PropTypes.string.isRequired,
  resource: PropTypes.object,
};
