const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json({ extended: false }));

app.use(cors());

app.use('/api', require('./route/api'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));