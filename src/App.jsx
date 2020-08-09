import React from 'react';
import './App.scss';
import Quiz from './components/Quiz/Quiz';
import ApiContextProvider from './contexts/ApiContext';

const App = () => {
  return (
    <div className="App">
      <ApiContextProvider>
        <Quiz />
      </ApiContextProvider>
    </div>
  );
};

export default App;
