import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoCard from "./TodoCard";
import { getTodos, createTodo } from "../actions/todo";

const Main = ({ getTodos, createTodo, todos }) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
    category: "Personal",
    due_date: "2019-10-16"
  });

  const { title, description, status, category, due_date } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createTodo(formData);
  };

  return (
    <Fragment>
      <Fragment>
        <div className='jumbotron'>
          <h1 className='display-4'>Node-React to do app</h1>
          <p className='lead'>This is a simple to do app</p>
          <hr className='my-4' />
          <p>Create a new to do below:</p>
        </div>
        <div className='container'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
              <label for='Title'>Title</label>
              <input
                className='form-control'
                type='text'
                placeholder='Title'
                name='title'
                value={title}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label for='Description'>Description</label>
              <textarea
                className='form-control'
                type='text'
                placeholder='Description'
                name='description'
                value={description}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label for='Category'>Select category</label>
              <select
                className='form-control'
                name='category'
                value={category}
                onChange={e => onChange(e)}>
                <option value='Personal'>Personal</option>
                <option value='Work'>Work</option>
              </select>
            </div>
            <div className='form-group'>
              <label for='Status'>Select status</label>
              <select
                className='form-control'
                name='status'
                value={status}
                onChange={e => onChange(e)}>
                <option value='Pending'>Pending</option>
                <option value='Done'>Done</option>
              </select>
            </div>
            <div className='form-group'>
              <label for='Due date'>Due date</label>
              <input
                className='form-control'
                type='text'
                placeholder='Due on'
                name='due_date'
                value={due_date}
                onChange={e => onChange(e)}
              />
            </div>
            <button type='submit' class='btn btn-primary'>
              Submit
            </button>
          </form>
          <br />
        </div>
      </Fragment>
      <Fragment>
        <div className=''>
          {todos.length > 0 ? (
            todos.map(todoItem => (
              <TodoCard key={todoItem._id} todo={todoItem} />
            ))
          ) : (
            <Fragment>
              <p>No to do items yet...</p>
            </Fragment>
          )}
        </div>
      </Fragment>
    </Fragment>
  );
};

Main.propTypes = {
  getTodos: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  todos: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todo.todos
});

export default connect(
  mapStateToProps,
  { getTodos, createTodo }
)(Main);
