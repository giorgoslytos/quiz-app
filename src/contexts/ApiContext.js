
import React, { createContext, useState, useReducer, useEffect } from 'react';
import { navDirReducer } from '../reducers/navDirReducer'
import shuffle from '../utils/shuffle';

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const [apiSelection, setApiSelection] = useState(
    {
      trivia_amount: '10',
      trivia_category: 'any',
      trivia_difficulty: 'any',
      trivia_type: 'any'
    }
  );
  const [apiStatus, setApiStatus] = useState(false)
  const [quizArr, setQuizArr] = useState([])
  const [userSelection, setUserSelection] = useState({})
  const [navPosition, dispatchNavDir] = useReducer(navDirReducer, 0)
  const [quizCards, setQuizCards] = useState([])
  const [quizfinished, setQuizfinished] = useState(false)
  const [quizResults, setQuizResults] = useState(0)
  const [reviewMode, setReviewMode] = useState(false)

  const fetchApi = () => {
    fetch(getApi())
      .then((response) => response.json())
      .then((data) => setQuizArr(data.results));
  }
  const getApi = () => {
    const { trivia_amount, trivia_category, trivia_difficulty, trivia_type } = apiSelection
    return 'https://opentdb.com/api.php?amount=' + trivia_amount + (trivia_category !== 'any' ? '&category=' + trivia_category : '') + (trivia_difficulty !== 'any' ? '&difficulty=' + trivia_difficulty : '') + (trivia_type !== 'any' ? '&type=' + trivia_type : '')
  }
  useEffect(() => {
    let answers = quizArr.map((quiz) => [
      ...quiz.incorrect_answers,
      quiz.correct_answer,
    ]);
    answers.map((answer) => shuffle(answer));

    let tempArr = []
    for (let i = 0; i < quizArr.length; i++) {
      tempArr.push({
        category: quizArr[i].category,
        correct_answer: quizArr[i].correct_answer,
        difficulty: quizArr[i].difficulty,
        question: quizArr[i].question,
        answers: answers[i],
      })
    }
    setQuizCards(tempArr)
  }, [quizArr]);

  const setResultPercentage = () => {
    quizArr.reduce(card => card.correct_answer === 0);
    let correctAnswers = 0;
    for (let i = 0; i < quizArr.length; i++) {
      if (quizArr[i].correct_answer === userSelection[i]) {
        correctAnswers++;
      }
    }
    setQuizfinished(true)
    setQuizResults({ percentage: correctAnswers / quizArr.length * 100, total: quizArr.length, correctAnswers })
  }

  const handleAgainBtn = () => {
    setQuizfinished(false);
    setApiStatus(false);
    setUserSelection(false);
    setQuizCards([]);
    dispatchNavDir({ type: 'RESTART' });
    setReviewMode(false)
  };

  const handleReviewBtn = () => {
    setQuizfinished(false);
    dispatchNavDir({ type: 'RESTART' });
    setReviewMode(true)
  };


  return (
    <ApiContext.Provider value={{ reviewMode, setReviewMode, quizResults, handleAgainBtn, handleReviewBtn, quizCards, setQuizCards, fetchApi, apiSelection, setApiSelection, getApi, apiStatus, setApiStatus, quizArr, setQuizArr, userSelection, setUserSelection, navPosition, dispatchNavDir, setResultPercentage, quizfinished, setQuizfinished }}>
      {props.children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;