const express = require('express');
const router = express.Router();
const { addTipsData, allTips, addReportData ,addDoctersData,allDoctors } = require("../Controller/Controller");

router.route("/addtips").get(addTipsData);
router.route("/gettips").get(allTips);
router.route("/reports").post(addReportData);
router.route("/adddoc").post(addDoctersData);
router.route("/getdoc").get(allDoctors);

module.exports = router;
