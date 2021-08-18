const express = require("express");
const router = express.Router();
const softskillController = require("../controllers/softskill");

router.get('/', softskillController.getSoftSkill);
router.post('/', softskillController.postSoftSkill);
router.delete("/:id", softskillController.deleteSoftSkill)
router.put("/:id", softskillController.putSoftSkill)

module.exports = router;