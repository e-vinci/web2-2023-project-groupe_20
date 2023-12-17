const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'Gabriel' }] });
});

module.exports = router;
