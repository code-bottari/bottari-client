import METHODS from "../constants/methods";

const {
  GET,
  POST,
  DELETE,
} = METHODS;

export const getData = async (path) => {
  const options = {
    method: GET,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}${path}`, options);

    const data = response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postData = async (path, resource) => {
  const options = {
    method: POST,
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

export const deleteData = async (path, resource) => {
  const options = {
    method: DELETE,
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
