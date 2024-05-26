// Import necessary modules
const mongoose = require('mongoose');
const Job = require('../models/job');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/gitam-job-board';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Sample job data
const sampleJobs = [
  {
    title: 'Frontend Developer',
    description: 'We are looking for a skilled frontend developer to join our team.',
    location: 'Remote',
    type: 'full-time',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Marketing Intern',
    description: 'Exciting opportunity for a marketing intern to gain hands-on experience.',
    location: 'New York',
    type: 'internship',
    skills: ['Marketing', 'Social Media', 'Communication']
  },
  // Add more sample job listings here if needed
];

// Function to seed sample job data
const seedJobs = async () => {
  try {
    // Remove existing jobs
    await Job.deleteMany({});
    // Insert sample jobs
    await Job.insertMany(sampleJobs);
    console.log('Sample jobs seeded successfully');
  } catch (err) {
    console.error('Error seeding sample jobs:', err);
  } finally {
    // Close MongoDB connection
    mongoose.connection.close();
  }
};

// Seed sample job data
seedJobs();
