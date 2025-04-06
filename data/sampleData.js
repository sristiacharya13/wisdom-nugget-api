const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Nugget = require('../models/Nugget');
dotenv.config();
const connectDB = require('../config/db');

const sampleNuggets = [
  { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Wisdom begins in wonder.", author: "Socrates" },
  { text: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.", author: "Bruce Lee" },
];

const seedData = async () => {
  try {
    await connectDB();
    await Nugget.deleteMany();
    await Nugget.insertMany(sampleNuggets);
    console.log('Sample data inserted!');
    process.exit();
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

seedData();
