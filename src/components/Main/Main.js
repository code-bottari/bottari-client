import PropTypes from "prop-types";

import AligningSelectBox from "../AligningSelectBox/AligningSelectBox";
import SnippetList from "../SnippetList/SnippetList";

export default function Main({ page, onButtonClick }) {
  const handleShowMoreButtonClick = (value) => onButtonClick(value);

  return (
    <>
      <AligningSelectBox />
      <SnippetList page={page} onShowMoreButtonClick={handleShowMoreButtonClick} />
    </>
  );
};

Main.propTypes = {
  page: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
