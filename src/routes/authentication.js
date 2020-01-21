const express = require("express");
const router = express.Router();
// const passport = require("passport");

router.get("/singup",   (req, res) => {
    res.render("auth/singup");
});

router.get("/profile", (req, res) => {
    res.send("Recibido");
});


module.exports = router;