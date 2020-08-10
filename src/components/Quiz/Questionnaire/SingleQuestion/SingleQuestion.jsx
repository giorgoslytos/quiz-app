import React from 'react';
import { ApiContext } from '../../../../contexts/ApiContext';
import { useContext } from 'react';

const SingleQuestion = () => {
  const {
    quizCards,
    navPosition,
    userSelection,
    setUserSelection,
    reviewMode,
  } = useContext(ApiContext);

  const handleSelection = (navPosition, option) => {
    if (!userSelection[navPosition])
      setUserSelection({
        ...userSelection,
        [navPosition]: option,
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between ">
        <div>
          <p
            className="m-0"
            dangerouslySetInnerHTML={{
              __html: `${quizCards[navPosition].category}`,
            }}
          ></p>
          <p
            className="h5 question-title"
            dangerouslySetInnerHTML={{
              __html: `${quizCards[navPosition].question}`,
            }}
          />
        </div>
        <p className="counter ml-2">
          {window.innerWidth >= 400
            ? `${navPosition + 1} out of ${quizCards.length}`
            : `${navPosition + 1}/${quizCards.length}`}
        </p>
      </div>
      <form className={reviewMode ? 'pointer-events-none' : ''}>
        {quizCards[navPosition].answers.map((option) => (
          <div
            className="form-check p-0"
            key={quizCards[navPosition].question + '-' + option}
          >
            <input
              className="form-check-input"
              type="radio"
              style={{ display: 'none' }}
              name={option}
              checked={
                userSelection[navPosition]
                  ? userSelection[navPosition] === option
                  : false
              }
              readOnly
            />
            <label
              onClick={() => handleSelection(navPosition, option)}
              className={
                userSelection[navPosition]
                  ? option === quizCards[navPosition].correct_answer
                    ? 'form-check-label btn btn-outline-secondary w-100 my-1 correct'
                    : 'form-check-label btn btn-outline-secondary w-100 my-1 incorrect'
                  : 'form-check-label btn btn-outline-secondary w-100 my-1'
              }
              htmlFor={option}
              dangerouslySetInnerHTML={{ __html: `${option}` }}
            />
          </div>
        ))}
      </form>
    </>
  );
};

export default SingleQuestion;
