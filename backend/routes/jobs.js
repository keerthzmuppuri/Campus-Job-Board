const express = require('express');
const router = express.Router();
const Job = require('../models/job');

// Route to get all jobs
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new job
router.post('/jobs', async (req, res) => {
  const job = new Job({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    type: req.body.type,
    skills: req.body.skills
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
