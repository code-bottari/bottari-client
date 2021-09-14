import METHODS from "../constants/methods";
import createError from "../utils/createError";

const {
  GET,
  POST,
  DELETE,
  PATCH,
} = METHODS;

const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSnippetList = async (query) => {
  let requestUrl = `${process.env.REACT_APP_SERVER_URL}/snippets`;

  if (query) {
    let convertedQuery = "?";

    for (const [key, value] of Object.entries(query)) {
      const convertedValue = value.join("+");

      convertedQuery += `${key}=${convertedValue}`;
    }

    requestUrl += convertedQuery;
  };

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

export const checkMember = async (resource) => {
  let requestUrl = `${process.env.REACT_APP_SERVER_URL}/users/check-member`;

  const options = {
    method: POST,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ resource }),
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

export const logout = async () => {
  let requestUrl = `${process.env.REACT_APP_SERVER_URL}/users/logout`;

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

export const deleteSnippet = async (id) => {
  let requestUrl = `${process.env.REACT_APP_SERVER_URL}/snippets/`;

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

export const getUserData = async (id) => {
  let requestUrl = `${process.env.REACT_APP_SERVER_URL}/users/${id}`;

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
  let requestUrl = `${process.env.REACT_APP_SERVER_URL}/users/${id}`;

  const options = {
    method: PATCH,
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

export const patchData = async (path, resource) => {
  const options = {
    method: PATCH,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(resource),
  };

  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}${path}`, options);

    const data = response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
