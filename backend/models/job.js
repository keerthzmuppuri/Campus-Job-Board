const express = require('express');
const mongoose = require('mongoose');
const jobRouter = require('./routes/jobs');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/gitam-job-board', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(express.json());
app.use(jobRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
