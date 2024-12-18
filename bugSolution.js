const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Check if the userId is a number
  if(isNaN(userId)){
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to retrieve user' });
    }
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  });
});