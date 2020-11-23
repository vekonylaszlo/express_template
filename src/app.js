const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');

const project = require('./constants/project');
const api = require('./api');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(helmet()),
app.use(morgan('tiny'));
app.use(compression());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

app.get('/', (req, res) => {
  res.json({
    message: project.message,
  });
});

app.use('/api/v1', api);

module.exports = app;
