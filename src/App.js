import React from 'react';
import TodoList from './container/TodoList';
import './App.css';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrap}>
      <TodoList />
    </div>
  );
}

export default App;
