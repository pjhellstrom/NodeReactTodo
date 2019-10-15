import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    content: "",
    status: "Pending",
    category: "Personal",
    due_date: "2019-10-16"
  });

  const { title, content, status, category, due_date } = formData;

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
        <div className='container is-vertical-center'>
          <div className='tile is-parent'>
            <article className='tile is-child notification is-warning'>
              <p className='title'>Create a Todo</p>
              <div className='content'>
                <form onSubmit={e => onSubmit(e)}>
                  <div className='field'>
                    <p className='control has-icons-left has-icons-right'>
                      <input
                        className='input'
                        type='text'
                        placeholder='Title'
                        name='title'
                        value={title}
                        onChange={e => onChange(e)}
                      />
                    </p>
                  </div>
                  <div className='field'>
                    <textarea
                      className='input'
                      type='text'
                      placeholder='Content'
                      name='content'
                      value={content}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='field'>
                    <span className='select'>
                      <select
                        name='category'
                        value={category}
                        onChange={e => onChange(e)}>
                        <option value='Personal'>Personal</option>
                        <option value='Work'>Work</option>
                      </select>
                    </span>
                  </div>
                  <div className='field'>
                    <p className='control'>
                      <button type='submit' className='button is-dark'>
                        Save
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </article>
          </div>
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
