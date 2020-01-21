const express = require("express");
const router = express.Router();

const pool = require("../database");

const controller = require("../controllers/customerControllers");


router.get("/listP", controller.listP);
router.get("/listF", controller.listF);
router.get("/listA", controller.listA);
router.get("/listCompra", controller.listCompra);
router.get("/singup", controller.singup);

router.get("/addp", controller.callP);
router.get("/addf", controller.callF);
router.get("/adda", controller.callA);
router.get("/compra", controller.callCompra);


// router.get("/deletec/:idcompra", controller.deleteC);

router.get("/deleteC/:idcompra", controller.deleteCompra);

router.get("/deleteA/:idanimal", controller.deleteAnimal);

router.get("/deleteF/:idfinca", controller.deleteFinca);

router.get("/deleteP/:idprov", controller.deleteProveedor);


router.get("/editP/:idprov", controller.editP);
router.get("/editF/:idfinca", controller.editF);
router.get("/editA/:idanimal", controller.editA);
router.get("/editC/:idcompra", controller.editC);



/*
        Metodos Post
*/

router.post("/addpr", controller.saveP);
router.post("/addf", controller.saveF);
router.post("/adda", controller.saveA);
router.post("/compra", controller.saveCompra);
router.post("/singup", controller.saveSingup);


router.post("/editP/:idprov", controller.updateP);
router.post("/editF/:idfinca", controller.updateF);
router.post("/editA/:idanimal", controller.updateA);
router.post("/editC/:idcompra", controller.updateC);

module.exports = router;