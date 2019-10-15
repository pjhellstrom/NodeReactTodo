import { GET_TODOS, DELETE_TODO, TODO_ERROR } from "../actions/types";

const initialState = {
  todos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
        loading: false
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todo.filter(todo => todo._id !== payload),
        loading: false
      };
    case TODO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
