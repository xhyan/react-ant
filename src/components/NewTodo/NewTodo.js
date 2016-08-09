import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from './../../actions/todo';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class NewTodo extends Component {
  render() {
    const {dispatch, visibleTodos, visibilityFilter} = this.props
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
        <TodoList todos={visibleTodos} onTodoClick={index => dispatch(completeTodo(index))}/>
        <Footer filter={visibilityFilter} onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}/>
      </div>
    )
  }
}

NewTodo.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired}).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
}

export default NewTodo
