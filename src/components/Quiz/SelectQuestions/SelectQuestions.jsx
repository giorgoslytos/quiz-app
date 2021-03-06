import React, { useContext } from 'react';
import { ApiContext } from '../../../contexts/ApiContext';

const SelectQuestions = () => {
  const { fetchApi, apiSelection, setApiSelection, setApiStatus } = useContext(
    ApiContext
  );

  const submitForm = (e) => {
    e.preventDefault();
    setApiStatus(true);
    fetchApi();
  };

  return (
    <div className="card" style={{}}>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="trivia_amount">Number of Questions:</label>
            <input
              type="number"
              name="trivia_amount"
              className="form-control"
              min="1"
              max="50"
              // defaultValue="10"
              value={apiSelection.trivia_amount}
              onChange={(e) =>
                setApiSelection({
                  ...apiSelection,
                  trivia_amount: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="trivia_category">Select Category:</label>
            <select
              className="form-control"
              name="trivia_category"
              value={apiSelection.trivia_category}
              onChange={(e) =>
                setApiSelection({
                  ...apiSelection,
                  trivia_category: e.target.value,
                })
              }
            >
              <option value="any">Any Category</option>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals &amp; Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science &amp; Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">
                Entertainment: Japanese Anime &amp; Manga
              </option>
              <option value="32">
                Entertainment: Cartoon &amp; Animations
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="trivia_difficulty">Select Difficulty: </label>
            <select
              name="trivia_difficulty"
              className="form-control"
              value={apiSelection.trivia_difficulty}
              onChange={(e) =>
                setApiSelection({
                  ...apiSelection,
                  trivia_difficulty: e.target.value,
                })
              }
            >
              <option value="any">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="trivia_type">Select Type: </label>
            <select
              name="trivia_type"
              className="form-control"
              value={apiSelection.trivia_type}
              onChange={(e) =>
                setApiSelection({
                  ...apiSelection,
                  trivia_type: e.target.value,
                })
              }
            >
              &gt;
              <option value="any">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
          </div>
          <div className="form-group mt-4">
            <input
              className="w-100 button"
              type="submit"
              value="START!"
              onClick={submitForm}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectQuestions;
