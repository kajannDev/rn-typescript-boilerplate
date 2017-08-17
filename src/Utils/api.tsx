// GET REQUEST
export const getRequest = ({ url }): Promise<Object> =>
  fetch(url)
    .then((response: any) => response.json())
    .then((result: any) => result)
    .catch((error: any) => ({ error }));

// POST REQUEST
export const postRequest = ({ url, authToken, body }): Promise<Object> => {
  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: authToken,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })
    .then((response: any) => response.json())
    .then((result: any) => result)
    .catch((error: any) => ({ error }));
};

export interface IGetRequest {
  url: String;
}
export interface IPostRequest {
  url: String;
  authToken: String;
  body: String;
}
