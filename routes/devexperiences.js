const express = require("express");
const router = express.Router();
const devexperienceController = require("../controllers/devexperience");


router.get('/', devexperienceController.getDevExperience)
router.post('/', devexperienceController.postDevExperience)
router.delete("/:id", devexperienceController.deleteDevExperience)
router.put("/:id", devexperienceController.putDevExperience);
module.exports = router;