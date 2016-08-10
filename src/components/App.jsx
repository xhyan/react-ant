import React, {Component, PropTypes} from 'react';
import Todos from './Todos/Todos';
import Tabler from './Table/Table';
import MainLayout from '../layouts/MainLayout/MainLayout';
import AddTodo from './../containers/AddTodo';
import VisibleTodoList from './../containers/VisibleTodoList';
import Footer from './NewTodo/Footer';

const App = ({location}) => {
  return (
    <MainLayout>
      <Todos location={location}/>
      <Tabler/>

      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </MainLayout>
  );
};

App.propTypes = {};

export default App;
