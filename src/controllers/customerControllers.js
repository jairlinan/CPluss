const controller = {};

const pool = require("../database");


controller.callP =  (req, res) => {
    res.render("./links/addPr");
};

controller.callF = (req, res) => {
    res.render("./links/addF");
};

controller.callA = (req, res) => {
    res.render("./links/addA");
};


controller.listP = async (req, res) => {
    const links = await pool.query("select * from proveedor");
    res.render("links/listP", { links });
};

controller.listF = async (req, res) => {
    const links = await pool.query("select * from finca");
    res.render("links/listF", { links });
};

controller.listA = async (req, res) => {
    const links = await pool.query("select * from animal");
    res.render("links/listA", { links });
};

controller.saveP = async (req, res) => {
    const {cc, fullname, dir, phone} = req.body;
    const newDate = {
        cc,
        fullname,
        dir,
        phone
    }
    await pool.query("INSERT INTO proveedor SET ?", [newDate])
    res.redirect("/links/listP");
};

controller.saveF = async (req, res) => {
    const {id, name, location, ccproveedor} = req.body;
    const newDate = {
        id,
        name,
        location,
        ccproveedor
    }
    await pool.query('INSERT INTO finca set ?', [newDate]);
        res.redirect("/links/listF");
};

controller.saveA = async (req, res) => {
    const {chapeta, peso, color, genero, vrmacho, vrhembra, fincaid} = req.body;
    const newDate = {
        chapeta,
        peso,
        color,
        genero,
        vrmacho,
        vrhembra,
        fincaid
    }
    await pool.query("INSERT INTO animal SET ?", [newDate])
    res.redirect("/links");
};
   


controller.edit = (req, res) => {
    const { id } = req.params;
    pool.query("SELECT * FROM proveedor WHERE cc = ?", [id]) 
    res.render("addPr", { links });
};




// controller.editP =  (req, res) => {
//         res.redirect("./links/addPr");
//     };

// controller.editP = async (req, res) => {
//     const { id } = req.params;
//     await pool.query("SELECT * FROM proveedor WHERE cc = ?", [id]) 
//         res.redirect("./links/addPr", {links: links[0]});
//     };
    // const links = await pool.query("select * from proveedor");
    // res.render("links/list", { links });

/*
controller.edit = (req, res) => {
    const { id } = req.params;
    pool.query("SELECT * FROM user WHERE id = ?", [id], (err, result) => {
        if (err) {res.json(err);}
        else{res.render("update.ejs", {data: result[0]});}
    });
};

controller.update = async (req, res) => {
    const { id } = req.params;
    const {name, address, phone} = req.body;
    const upNewDate = {
        name,
        address,
        phone
    };
    await pool.query('UPDATE user set ? WHERE id = ?', [upNewDate, id], (err, rows) => {
        if (err) {res.json(err);}
        else{res.redirect("/");}
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    pool.query("DELETE FROM user WHERE id = ?", [id], (err, result) => {
        if (err) {res.json(err);}
        else{res.redirect("/");}
    });
};*/

        module.exports = controller;