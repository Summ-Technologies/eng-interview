import { GET_TODOS_SUCCESS } from "./actions";
const initialState = {
  todos: {}, // todoId -> todoModel
};
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return {
        todos: action.payload.reduce(
          (prev, curr) => ({ ...prev, [curr.id]: curr }),
          {}
        ),
      };
    default:
      return state;
  }
}
