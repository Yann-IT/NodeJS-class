const express = require("express");
const router = express.Router();
const headerController = require("../controllers/header");

router.get('/', headerController.getHeader)
router.put('/', headerController.putHeader)

module.exports = router;