import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Quiz from './pages/Quiz';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true';
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('dark-mode', newMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
      <Router>
        <header className="app-header">
          <div className={`menu-container ${isDarkMode ? 'dark-mode' : ''}`}>
            <nav>
              <a href="/">Accueil</a>
              <a href="/map">Carte</a>
              <a href="/quiz">Quiz</a>
            </nav>
          </div>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;