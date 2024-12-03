import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions } from '../api';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetchQuizQuestions().then(data => setQuestions(data));
  }, []);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div>
          <h2>Quiz terminé !</h2>
          <p>Votre score : {score} / {questions.length}</p>
        </div>
      ) : questions.length > 0 ? (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          {questions[currentQuestionIndex].options.map(option => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <p>Chargement des questions...</p>
      )}
    </div>
  );
};

export default Quiz;
