import { createAction } from "redux-api-middleware";

const BASE_URL = "http://localhost:5000";

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

export function getTodos() {
  return createAction({
    endpoint: `${BASE_URL}/todos`,
    method: "GET",
    types: [GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_SUCCESS],
  });
}
