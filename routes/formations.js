const express = require("express");
const router = express.Router();
const formationController = require("../controllers/formation");

router.get('/', formationController.getFormation);
router.post('/', formationController.postFormation);
router.delete("/:id", formationController.deleteFormation)
router.put("/:id", formationController.putFormation)

module.exports = router;
