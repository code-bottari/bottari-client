import { pascalCase } from "pascal-case";

import MESSAGES from "../constants/messages";

const {
  EXCESSIVE_HASHTAG_NUMBER,
  EXCESSIVE_HASHTAG_LENGTH,
  UNSUITABLE_CASE,
} = MESSAGES;

const validateHashtag = (hashtagList) => {
  if (hashtagList.length > 5) {
    return EXCESSIVE_HASHTAG_NUMBER;
  }

  const hasExeedingLength = hashtagList.some((hashtag) => hashtag.length > 16);

  if (hasExeedingLength) {
    return EXCESSIVE_HASHTAG_LENGTH;
  }

  const hasNonePascalCase = hashtagList.some((hashtag) => hashtag !== `#${pascalCase(hashtag)}`);

  if (hasNonePascalCase) {
    return UNSUITABLE_CASE;
  }
};

export default validateHashtag;
