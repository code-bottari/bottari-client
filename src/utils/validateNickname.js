import MESSAGES from "../../src/constants/messages";

const {
  INCLUDING_SPECIAL_CHARACTER,
  INCLUDING_SPACE,
  INSUFFICIENT_LENGTH,
  EXCESSIVE_LENGTH,
  OK,
} = MESSAGES;

const validateNickname = (nickname) => {
  const nicknameArray = Array.from(nickname);

  const hasSpecialCharacter = nicknameArray.some((character) => {
    return (
      (character.charCodeAt() >= 33 && character.charCodeAt() <= 47)
      || (character.charCodeAt() >= 58 && character.charCodeAt() <= 64)
      || (character.charCodeAt() >= 91 && character.charCodeAt() <= 96)
      || (character.charCodeAt() >= 123 && character.charCodeAt() <= 126)
    );
  });

  if (hasSpecialCharacter) {
    return INCLUDING_SPECIAL_CHARACTER;
  }

  const hasSpace = nicknameArray.some((character) => character.charCodeAt() === 32);

  if (hasSpace) {
    return INCLUDING_SPACE;
  }

  if (nickname.length < 2) {
    return INSUFFICIENT_LENGTH;
  }

  if (nickname.length > 10) {
    return EXCESSIVE_LENGTH;
  }

  return OK;
};

export default validateNickname;
