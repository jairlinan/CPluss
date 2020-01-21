const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const pool = require("../database");

passport.use("local.signup", new localStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req, username, password, done) => {

    const { fullname } = req.body;
    const newDate = {
        username,
        password,
        fullname
    }
    console.log(newDate);
    await pool.query("INSERT INTO users SET ?", [newDate])
    res.redirect("/links");
    
}
));