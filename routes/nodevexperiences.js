const express = require("express");
const router = express.Router();
const nodevexperienceController = require("../controllers/nodevexperience");


router.get('/', nodevexperienceController.getNoDevExperience)
router.post('/', nodevexperienceController.postNoDevExperience)
router.delete("/:id", nodevexperienceController.deleteNoDevExperience)
router.put("/:id", nodevexperienceController.putNoDevExperience);
module.exports = router;