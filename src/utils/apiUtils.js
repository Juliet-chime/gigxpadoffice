import { logout } from "./authUtils.js";

export const AUTH_TOKEN = "__API_TOKEN__";

export const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN);

const baseURL = process.env.REACT_APP_API_ENDPOINT

const makeAPICall = async (
  { path, method = "POST", payload = null, params = null },
  customConfigs
) => {
  const token = getAuthToken();

  const headers = {
    Accept: "application/json, */*",
    "Content-type": "application/json",
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  const configs = {
    method,
    headers,
    ...customConfigs,
  };

  if (payload) configs.body = JSON.stringify(payload);

  let url = new window.URL(`${baseURL}${path}`);

  const buildParams = (data) => {
    const params = new window.URLSearchParams();

    for (let [key, value] of Object.entries(data)) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          params.append(`${key}[]`, item);
        });
      } else {
        params.append(key, value);
      }
    }

    return params;
  };

  if (params) url.search = buildParams(params);

  return window
    .fetch(url, configs)
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        let errorMessage;
        if (data && data.messages) {
          if (typeof data.messages === "string") {
            errorMessage = data.messages;
          } else if (Array.isArray(data.messages)) {
            errorMessage = data.messages
              .map(({ message, token_class }) => `${token_class}: ${message}`)
              .join(", ");
          }
        } else {
          errorMessage = "An unknown error occurred!";
        }

        let error = new Error(errorMessage);
        if (data.code === "token_not_valid" || error === "Token is invalid or expired") {
          //destroy client auth details and log user out
          logout();
        } else {
          error.status = response.status || 500;
        }
        return Promise.reject(error);
      }
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export default makeAPICall;
