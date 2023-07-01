import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavigtaionBar from './components/NavigtaionBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavigtaionBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
