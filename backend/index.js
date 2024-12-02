const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Route for factory information
app.get('/api/factory', (req, res) => {
    res.json({
      name: 'FlushFactory',
      description: 'Une usine à la pointe de la technologie avec des réacteurs masterclass.',
      location: 'Valenciennes',
    });
  });
  
  // Route for reactors status
  app.get('/api/reactors', (req, res) => {
    res.json([
      { id: 1, name: 'Réacteur A', status: 'Actif' },
      { id: 2, name: 'Réacteur B', status: 'Inactif' },
      { id: 3, name: 'Réacteur C', status: 'En maintenance' },
    ]);
  });

  // Route for the quiz
  app.get('/api/quiz', (req, res) => {
    res.json([
      { question: 'Où se situe FlushFactory ?', answer: 'Valenciennes' },
      { question: 'Combien de réacteurs sont actifs ?', answer: '1' },
    ]);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
