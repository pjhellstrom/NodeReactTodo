import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { deleteTodo } from "../actions/todo";

const TodoCard = ({ deleteTodo, todo }) => {
  return (
    <article className='message is-primary is-medium'>
      <div className='message-header'>
        <p>{todo.title}</p>
        <button
          onClick={() => deleteTodo(todo._id)}
          className='delete is-medium'
          aria-label='delete'></button>
      </div>
      <div className='message-body'>
        <small>
          <Moment format='MMM D, YYYY'>{todo.due_date}</Moment>
        </small>
        <small> - In {todo.category}</small>
        <br />
      </div>
      <div className='message-body'>{todo.content}</div>
    </article>
  );
};

TodoCard.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default connect(
  null,
  { deleteTodo }
)(TodoCard);
