import { pascalCase } from "pascal-case";

import MESSAGES from "../constants/messages";

const {
  EXCESSIVE_HASHTAG_NUMBER,
  EXCESSIVE_HASHTAG_LENGTH,
  UNSUITABLE_CASE,
} = MESSAGES;

const MAX_NUMBER = 5;
const MAX_LENGTH = 16;

const validateHashtag = (hashtagList) => {
  if (hashtagList.length > MAX_NUMBER) {
    return EXCESSIVE_HASHTAG_NUMBER;
  }

  const hasExeedingLength = hashtagList.some((hashtag) => hashtag.length > MAX_LENGTH);

  if (hasExeedingLength) {
    return EXCESSIVE_HASHTAG_LENGTH;
  }

  const hasNonePascalCase = hashtagList.some((hashtag) => hashtag !== `#${pascalCase(hashtag)}`);

  if (hasNonePascalCase) {
    return UNSUITABLE_CASE;
  }
};

export default validateHashtag;
