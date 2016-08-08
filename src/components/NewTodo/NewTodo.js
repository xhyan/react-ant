import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todo';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class NewTodo extends Component {
  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props
   return (
     <div>
       <AddTodo
         onAddClick={text =>
           dispatch(addTodo(text))
         } />
       <TodoList
         todos={visibleTodos}
         onTodoClick={index =>
           dispatch(completeTodo(index))
         } />
       <Footer
         filter={visibilityFilter}
         onFilterChange={nextFilter =>
           dispatch(setVisibilityFilter(nextFilter))
         } />
     </div>
   )
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}).isRequired).isRequired,
visibilityFilter: PropTypes.oneOf([
  'SHOW_ALL',
  'SHOW_COMPLETED',
  'SHOW_ACTIVE'
]).isRequired
}
