import React from 'react';
import './App.css';
import Layout from './Layout';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <React.Fragment>
      <Layout >
      <ToDoList />
      </Layout>
    </React.Fragment>
  );
}

export default App;
