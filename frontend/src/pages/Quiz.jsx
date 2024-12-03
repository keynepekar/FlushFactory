import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions } from '../api';
import '../styles/Quiz.scss';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10s
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    fetchQuizQuestions().then(data => setQuestions(data));
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, showScore]);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null); // reset après animation
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setTimeLeft(10);  // reser timer
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(10);
  };

  const getFinalMessage = () => {
    const scorePercentage = (score / questions.length) * 100; // gestion en % si ajout questions
  
    if (scorePercentage === 100) {
      return '🥳 Vamos !';
    } else if (scorePercentage >= 50) {
      return '🤠 Pas mal bg !';
    } else {
      return '🫠 Bon.';
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div>
          <h2>Quiz terminé !</h2>
          <p>Votre score : {score} / {questions.length}</p>
          <p>{getFinalMessage()}</p>
          <button onClick={resetQuiz}>Rejouer</button>
        </div>
      ) : questions.length > 0 ? (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <p className={`time-left ${timeLeft <= 3 ? 'red' : ''}`}>
              Temps restant : {timeLeft} secondes
          </p>
          {questions[currentQuestionIndex].options.map(option => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`quiz-button ${selectedAnswer === option ? (option === questions[currentQuestionIndex].answer ? 'correct' : 'wrong') : ''}`}
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
