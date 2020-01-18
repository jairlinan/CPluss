const express = require("express");
const router = express.Router();

const pool = require("../database");

const controller = require("../controllers/customerControllers");

router.get("/addp", controller.callP);

router.get("/addf", controller.callF);

router.get("/adda", controller.callA);

router.get("/listP", controller.listP);
router.get("/listF", controller.listF);
router.get("/listA", controller.listA);

// router.get("/editp", controller.editP);

// router.get("/updateP", controller.edit);


/*
        Metodos Post
*/

router.post("/addpr", controller.saveP);
router.post("/addf", controller.saveF);
router.post("/adda", controller.saveA);


module.exports = router;