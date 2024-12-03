import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Quiz from './pages/Quiz';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
      <Router>
        <header className="app-header">
          <nav>
            <a href="/">Accueil</a>
            <a href="/map">Carte</a>
            <a href="/quiz">Quiz</a>
          </nav>
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