import React from 'react';
import { ApiContext } from '../../../../contexts/ApiContext';
import { useContext } from 'react';

const Results = () => {
  const { handleReviewBtn, handleAgainBtn, quizResults } = useContext(
    ApiContext
  );
  const { percentage, total, correctAnswers } = quizResults;

  return (
    <div className="text-center">
      <div className="h4 my-4">You finished the Quiz!</div>
      <div className="h5">
        You're result was:{' '}
        <span className={percentage >= 50 ? 'text-success' : 'text-danger'}>
          {Math.round(percentage * 100) / 100}%,
        </span>
      </div>
      <div className="p">{`or ${correctAnswers} ${
        correctAnswers === 1 ? 'correct answer' : 'correct answers'
      } out of ${total} questions`}</div>
      <button
        className="m-3"
        onClick={() => {
          handleReviewBtn();
        }}
      >
        Review Results!
      </button>
      <button
        className="m-3"
        onClick={() => {
          handleAgainBtn();
        }}
      >
        Try again!
      </button>
    </div>
  );
};

export default Results;
