const express = require('express');
const morgan = require('morgan');

const youtubeRouter = require('./routes/youtubeRouter');
const instgramRouter = require('./routes/instgramRouter');
const facebookRouter = require('./routes/facebookRouter');
const cors = require('cors');

const app = express();
app.use(morgan());
app.use(cors());
app.use(express.json());

app.use(express.static(`${__dirname}/public`));
app.use('/api/v1/youtube', youtubeRouter);
// app.use('/api/v1/instgram', instgramRouter);
// app.use('/api/v1/facebook', facebookRouter);

module.exports = app;