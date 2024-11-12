const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware برای تجزیه داده‌های JSON
app.use(express.json());

// وارد کردن روت‌های کاربران
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// اتصال به MongoDB و راه‌اندازی سرور
mongoose.connect('mongodb://localhost:27017/user-management')
  .then(() => {
    console.log('Connected to MongoDB');

    // راه‌اندازی سرور پس از اتصال به MongoDB
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
