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
      { id: 1, name: 'Réacteur A', status: 'Actif', position: [48.8566, 2.3522] },          // Paris
      { id: 2, name: 'Réacteur B', status: 'Inactif', position: [45.764, 4.8357] },         // Lyon
      { id: 3, name: 'Réacteur C', status: 'En maintenance', position: [43.6047, 1.4442] }, // Toulouse
    ]);
  });

  // Route for the quiz
  app.get('/api/quiz', (req, res) => {
    res.json([
        {
            id: 1,
            question: 'Où se situent les locaux de FlushFactory ?',
            options: ['Valenciennes', 'Paris', 'Lyon', 'Saint-Lô'],
            answer: 'Valenciennes',
          },
          {
            id: 2,
            question: 'Combien de réacteurs sont actifs ?',
            options: ['1', '2', '3', '42'],
            answer: '1',
          },
          {
            id: 3,
            question: 'Quel réacteur est en maintenance ?',
            options: ['Réacteur A', 'Réacteur B', 'Réacteur C', 'Réacteur D'],
            answer: 'Réacteur C',
          },
    ]);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
