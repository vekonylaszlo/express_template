const express = require('express');
const project = require('../constants/project');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: project.message,
  });
});

module.exports = router;
