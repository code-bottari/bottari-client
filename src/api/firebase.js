import firebase from "firebase/app";
import "firebase/auth";

import ERRORS from "../constants/errors";
import MESSAGES from "../constants/messages";

const login = async () => {
  const provider = new firebase
    .auth
    .GoogleAuthProvider();

  const {
    AUTH_CANCELLED_POPUP_REQUEST,
    AUTH_POPUP_CLOSED_BY_USER,
    AUTH_POPUP_BLOCKED,
  } = ERRORS;

  const {
    DUPLICATE_REQUEST,
    POPUP_BLOCKED,
    POPUP_CLOSED,
    UNEXPECTED_ERROR,
  } = MESSAGES;

  try {
    await firebase
      .auth()
      .signInWithPopup(provider);

  } catch (error) {
    const { code } = error;

    if (code === AUTH_CANCELLED_POPUP_REQUEST) {
      throw new Error(DUPLICATE_REQUEST);
    }

    if (code === AUTH_POPUP_BLOCKED) {
      throw new Error(POPUP_BLOCKED);
    }

    if (code === AUTH_POPUP_CLOSED_BY_USER) {
      throw new Error(POPUP_CLOSED);
    }

    throw new Error(UNEXPECTED_ERROR);
  }
};

const logout = async () => {
  const { FAILURE_LOGOUT } = ERRORS;

  try {
    await firebase
      .auth()
      .signOut();

  } catch (error) {
    throw new Error(FAILURE_LOGOUT);
  }
};

const getToken = async () => {
  const { EXPIRED_TOKEN } = MESSAGES;

  const token = await firebase
    .auth()
    .currentUser
    .getIdToken(true);

  if (!token) {
    throw new Error(EXPIRED_TOKEN);
  }

  return token;
};

const firebaseAPI = {
  login,
  logout,
  getToken,
};

export default firebaseAPI;
