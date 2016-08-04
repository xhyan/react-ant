import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import Tabler from './Table/Table';
import MainLayout from '../layouts/MainLayout/MainLayout';

const App = ({ location }) => {
  return (
    <MainLayout>
      <Todos location={location} />
      <Tabler />
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
