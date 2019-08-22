const express = require('express');
const router = express.Router();
 
router.get('/', function (req, res) {
  res.send('root --- Basic path');
});

module.exports = router;
