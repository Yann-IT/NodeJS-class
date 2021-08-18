const express = require("express");
const router = express.Router();
const hardskillController = require("../controllers/hardskill");

router.get('/', hardskillController.getHardSkill);
router.post('/', hardskillController.postHardSkill);
router.delete("/:id", hardskillController.deleteHardSkill)
router.put("/:id", hardskillController.putHardSkill)

module.exports = router;