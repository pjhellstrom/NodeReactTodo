import { GET_TODOS, DELETE_TODO, TODO_ERROR } from "../actions/types";

const initialState = {
  todos: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todo.todos.filter(todo => todo._id !== payload)
      };
    case TODO_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
