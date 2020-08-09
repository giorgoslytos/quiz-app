import React from 'react';
import { ApiContext } from '../../../contexts/ApiContext';
import { useContext } from 'react';
import SingleQuestion from './SingleQuestion/SingleQuestion';
import Results from './Results/Results';
import Navigation from './Navigation/Navigation';

const Questionnaire = () => {
  const { quizCards, quizfinished } = useContext(ApiContext);

  return (
    <div className="card" style={{}}>
      <div className="card-body">
        {quizCards.length > 0 ? (
          <>
            {!quizfinished ? (
              <>
                <SingleQuestion />
                <Navigation />
              </>
            ) : (
              <Results />
            )}
          </>
        ) : (
          <div className="text-center">
            <div
              className="spinner-border text-primary text-center"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
