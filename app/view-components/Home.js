import React from 'react';
import './Home.css';
import Counter from './Counter';

const Home = () => {
  document.title = `Todo App`;
  return (
    <div className="view-home">
      <h1>Project with routing, a clicker and todos.</h1>
      <Counter></Counter>
    </div>
  )
}

export default Home;