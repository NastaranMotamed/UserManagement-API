const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());


const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


mongoose.connect('mongodb://localhost:27017/user-management')
  .then(() => {
    console.log('Connected to MongoDB');


    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
