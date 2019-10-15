import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { deleteTodo } from "../actions/todo";

const TodoCard = ({ deleteTodo, todo }) => {
  return (
    <Fragment>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{todo.title}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>
            Due on: <Moment format='MMM D, YYYY'>{todo.due_date}</Moment>
          </h6>
          <p className='card-text'>{todo.description}</p>
          <p className='card-text'>In category: {todo.category}</p>
          <a
            href='/'
            className='card-link'
            onClick={() => deleteTodo(todo._id)}>
            Delete
          </a>
        </div>
      </div>
    </Fragment>
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
