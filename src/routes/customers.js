const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.hbs", {title: "initial Page"});
});

router.get("/contact", (req, res) => {
    res.render("contact.hbs", {title: "Contact Page"});
});

module.exports = router;