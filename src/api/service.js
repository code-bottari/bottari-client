import createError from "../utils/createError";

import {
  GET,
  POST,
  DELETE,
  PATCH,
} from "../constants/methods";

import {
  FAILURE_LOGIN,
  FAILED_FULFILLMENT,
  FORBIDDEN_FOLLOWING,
  NOT_FOUND_USER,
  UNKNOWN_FOLLOWING_STATUS,
} from "../constants/messages";

const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSnippet = async (id) => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/snippets/${id}`;

  const options = {
    method: GET,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  try {
    const response = await fetchData(requestUrl, options);

    if (response.status === 400) { // 리팩토링 예정
      throw createError(response.status, "message");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const getSnippetList = async (query) => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/snippets${query}`;

  const options = {
    method: GET,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  try {
    const response = await fetchData(requestUrl, options);

    if (response.status === 400) { // 리팩토링 예정
      throw createError(response.status, "message");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const checkMember = async (idToken) => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/users/check-member`;

  const options = {
    method: POST,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${idToken}`,
    },
    credentials: "include",
  };

  try {
    const response = await fetchData(requestUrl, options);
    const { status } = response;

    if (status === 401) {
      throw createError(status, FAILURE_LOGIN);
    }

    if (status === 403) {
      throw createError(status, FAILURE_LOGIN);
    }

    if (status === 500) {
      throw createError(status, FAILED_FULFILLMENT);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/users/logout`;

  const options = {
    method: GET,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const response = await fetchData(requestUrl, options);

  const data = await response.json();

  return data;
};

export const deleteSnippet = async (id) => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/snippets/`;

  const options = {
    method: DELETE,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(id),
  };

  try {
    const response = await fetchData(requestUrl, options);

    if (response.status === 400) { // 리팩토링 예정
      throw createError(response.status, "message");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const createSnippet = async (resource) => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/snippets/new`;

  const options = {
    method: POST,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(resource),
  };

  try {
    const response = await fetchData(requestUrl, options);

    if (response.status === 400) {
      throw createError(response.status, "message");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const registerUser = async (idToken, resource) => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/users/register`;

  const options = {
    method: POST,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${idToken}`,
    },
    credentials: "include",
    body: JSON.stringify(resource),
  };

  try {
    const response = await fetchData(requestUrl, options);

    if (response.status === 400) {
      throw createError(response.status, "message");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const getUserData = async (id) => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/users/${id}`;

  const options = {
    method: GET,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  try {
    const response = await fetchData(requestUrl, options);

    if (response.status === 400) { // 리팩토링 예정
      throw createError(response.status, "message");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const modifyUserData = async (id, resource) => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/users/${id}`;

  const options = {
    method: PATCH,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(resource),
  };

  try {
    const response = await fetchData(requestUrl, options);

    if (response.status === 400) { // 리팩토링 예정
      throw createError(response.status, "message");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const createComment = async (resource) => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/snippets/comment`;

  const options = {
    method: POST,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(resource),
  };

  try {
    const response = await fetchData(requestUrl, options);

    if (response.status === 400) {
      throw createError(response.status, "message");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const setFollower = async (id, taskType) => {
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/users/follower/${id}`;

  const options = {
    method: PATCH,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ taskType }),
  };

  try {
    const response = await fetchData(requestUrl, options);
    const { status } = response;

    if (status === 403) {
      throw createError(status, FORBIDDEN_FOLLOWING);
    }

    if (status === 404) {
      throw createError(status, NOT_FOUND_USER);
    }

    if (status === 422) {
      throw createError(status, UNKNOWN_FOLLOWING_STATUS);
    }

    if (status === 500) {
      throw createError(status, FAILED_FULFILLMENT);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
