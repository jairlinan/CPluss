const express = require("express");
const router = express.Router();

const pool = require("../database");

router.get("/add", (req, res) => {
    res.render("./links/add");
});

router.post("/add", async (req, res) => {
    const {cc, fullname, dir, phone} = req.body;
    const newDate = {
        cc,
        fullname,
        dir,
        phone
    }
    await pool.query("INSERT INTO proveedor SET ?", [newDate])
    res.redirect("/links");
    res.send("Recibido");
});

router.get("/", async (req, res) => {
    const links = await pool.query("SELECT * FROM proveedor");
    console.log(links);
    res.render("links/list", { links });
});

module.exports = router;