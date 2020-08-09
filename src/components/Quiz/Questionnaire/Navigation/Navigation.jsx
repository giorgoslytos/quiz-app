import React from 'react';
import { ApiContext } from '../../../../contexts/ApiContext';
import { useContext } from 'react';
const Navigation = () => {
  const {
    navPosition,
    dispatchNavDir,
    quizCards,
    setResultPercentage,
    reviewMode,
  } = useContext(ApiContext);

  return (
    <div className="navdir mt-3">
      {navPosition !== 0 ? (
        <button
          className="btn btn-info text-white prev"
          onClick={() => {
            dispatchNavDir({ type: 'PREV' });
          }}
        >
          Previous
        </button>
      ) : (
        <></>
      )}

      {navPosition < quizCards.length - 1 ? (
        <button
          className="btn btn-info text-white next"
          onClick={() => {
            dispatchNavDir({ type: 'NEXT' });
          }}
        >
          Next
        </button>
      ) : (
        <button
          className="btn btn-info text-white next"
          onClick={() => {
            setResultPercentage();
          }}
        >
          {reviewMode ? 'Return' : 'Submit'}
        </button>
      )}
    </div>
  );
};

export default Navigation;
