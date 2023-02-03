import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header, MovieDetail, MovieList } from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='movie/:id' element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
