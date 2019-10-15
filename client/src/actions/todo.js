import axios from "axios";

import { GET_TODOS, DELETE_TODO, TODO_ERROR } from "./types";

// Get all todos
export const getTodos = () => async dispatch => {
  try {
    const res = await axios.get(`/api/todo/`);

    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update todo
export const createTodo = (formData, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/todo/", formData, config);

    dispatch({
      type: GET_TODOS,
      payload: res.data
    });

    // if (!edit) {
    //   history.push("/");
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({
      type: TODO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete todo
export const deleteTodo = id => async dispatch => {
  try {
    await axios.delete(`/api/todo/${id}`);

    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
