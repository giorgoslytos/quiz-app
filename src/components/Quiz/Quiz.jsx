import React from 'react';
import Questionnaire from './Questionnaire/Questionnaire';
import SelectQuestions from './SelectQuestions/SelectQuestions';
import { ApiContext } from '../../contexts/ApiContext';
import { useContext } from 'react';

const Quiz = () => {
  const { apiStatus } = useContext(ApiContext);
  return (
    <div className="container">
      <h1 className="display-4 mb-4  mt-3 text-center">Quiz App</h1>
      {!apiStatus ? <SelectQuestions /> : <Questionnaire />}
    </div>
  );
};

export default Quiz;
