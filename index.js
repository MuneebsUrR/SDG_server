const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();


const connectDB = async () => {
  try {
    console.log("uri", process.env.MONGO_URI);   
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};
connectDB();


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});