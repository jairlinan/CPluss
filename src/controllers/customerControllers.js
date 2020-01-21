const controller = {};

const pool = require("../database");

/*----------- Metodos Call ----------------------- */
controller.singup =  (req, res) => {
    res.render("auth/singup");
};
controller.callP =  (req, res) => {
    res.render("./links/addPr");
};
controller.callF = (req, res) => {
    res.render("./links/addF");
};
controller.callA = (req, res) => {
    res.render("./links/addA");
};
controller.callCompra = (req, res) => {
    res.render("./links/compra");
};

/*----------- Metodos Delete ----------------------- */

controller.deleteCompra = async (req, res) => {
    const { idcompra } = req.params;
   await pool.query("DELETE FROM compra WHERE idcompra = ?", [idcompra]) 
    res.redirect("/links/listCompra");
};
controller.deleteAnimal = async (req, res) => {
    const { idanimal } = req.params;
   await pool.query("DELETE FROM animal WHERE idanimal = ?", [idanimal]) 
    res.redirect("/links/listA");
};
controller.deleteFinca = async (req, res) => {
    const { idfinca } = req.params;
   await pool.query("DELETE FROM finca WHERE idfinca = ?", [idfinca]) 
    res.redirect("/links/listF");
};
controller.deleteProveedor = async (req, res) => {
    const { idprov } = req.params;
   await pool.query("DELETE FROM proveedor WHERE idprov = ?", [idprov]) 
    res.redirect("/links/listP");
};

/*----------- Metodos Listar ----------------------- */

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
controller.listCompra = async (req, res) => {
    const links = await pool.query("select * from compra");
    res.render("links/listCompra", { links });
};

/*----------- Metodos Guardar ----------------------- */

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
    const {namefinca, location, provid} = req.body;
    const newDate = {
        namefinca,
        location,
        provid
    }
    await pool.query('INSERT INTO finca set ?', [newDate]);
        res.redirect("/links/listF");
};
controller.saveA = async (req, res) => {
    const {chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid} = req.body;
    const newDate = {
        chapeta,
        peso,
        color,
        genero,
        vrmacho,
        vrhembra,
        fincaid,
        compraid
    }
    await pool.query("INSERT INTO animal SET ?", [newDate])
    res.redirect("/links/listA");
}; 
controller.saveCompra = async (req, res) => {
    const {fecha, guia, vrflete, nviajes, fincaid} = req.body;
    const newDate = {
        fecha,
        guia,
        vrflete,
        nviajes,
        fincaid
    }
    console.log(newDate);
    await pool.query("INSERT INTO compra SET ?", [newDate])
    res.redirect("/links/listCompra");
};
controller.saveSingup = async (req, res) => {
    const {username, password, fullname} = req.body;
    const newDate = {
        username,
        password,
        fullname
    }
    console.log(newDate);
    await pool.query("INSERT INTO users SET ?", [newDate])
    res.redirect("/links");
};

/*----------- Metodos Edit ----------------------- */

controller.editP =  async (req, res) => {
    const { idprov } = req.params;
  const links = await pool.query("SELECT * FROM proveedor WHERE idprov = ?", [idprov]); 
    res.render("links/editP", { links: links[0] });
};
controller.editF =  async (req, res) => {
    const { idfinca } = req.params;
  const links = await pool.query("SELECT * FROM finca WHERE idfinca = ?", [idfinca]);
    res.render("links/editF", { links: links[0] });
};
controller.editA =  async (req, res) => {
    const { idanimal } = req.params;
  const links = await pool.query("SELECT * FROM animal WHERE idanimal = ?", [idanimal]);
    res.render("links/editA", { links: links[0] });
};
controller.editC =  async (req, res) => {
    const { idcompra } = req.params;
  const links = await pool.query("SELECT * FROM compra WHERE idcompra = ?", [idcompra]);
    res.render("links/editC", { links: links[0] });
};

/*----------- Metodos Update ----------------------- */

controller.updateP =  async (req, res) => {
    const { idprov } = req.params;
    const {cc, fullname, dir, phone} = req.body;
    const newDate = {
        cc,
        fullname,
        dir,
        phone
    };
    await pool.query('UPDATE proveedor set ? WHERE idprov = ?', [newDate, idprov]);
    res.redirect("/links/listP");
};
controller.updateF =  async (req, res) => {
    const { idfinca } = req.params;
    const {namefinca, location, provid} = req.body;
    const newDate = {
        namefinca,
        location,
        provid
    };
    await pool.query('UPDATE finca set ? WHERE idfinca = ?', [newDate, idfinca]);
    res.redirect("/links/listF");
};
controller.updateA =  async (req, res) => {
    const { idanimal } = req.params;
    const {chapeta, peso, color, genero, vrmacho, vrhembra, fincaid, compraid} = req.body;
    const newDate = {
        chapeta,
        peso,
        color,
        genero,
        vrmacho,
        vrhembra,
        fincaid,
        compraid
    };
    await pool.query('UPDATE animal set ? WHERE idanimal = ?', [newDate, idanimal]);
    res.redirect("/links/listA");
};
controller.updateC =  async (req, res) => {
    const { idcompra } = req.params;
    const {fecha, guia, vrflete, nviajes, fincaid} = req.body;
    const newDate = {
        fecha,
        guia,
        vrflete,
        nviajes,
        fincaid
    };
    await pool.query('UPDATE compra set ? WHERE idcompra = ?', [newDate, idcompra]);
    res.redirect("/links/listCompra");
};

        module.exports = controller;