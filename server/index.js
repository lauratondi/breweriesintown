const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json({ extended: false }));

app.use(cors());

app.use('/api', require('./route/api'));

// if (process.env.NODE_ENV === 'production')
app.use(express.static('../build'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
