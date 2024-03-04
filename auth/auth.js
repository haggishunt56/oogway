const bcrypt = require('bcrypt');
const userModel = require('../models/user');
const jwt = require("jsonwebtoken");

// provide user with an access token if they supply the correct login credentials.
exports.login = function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    try {
        userModel.lookup(username, (err, user) => {
            if (err) {
                console.log("error looking up user");
                return res.status(500).render("500");
            } else if (!user) {
                console.log('Incorrect username or password.');
                return res.status(401).render("login", {
                    err: "Incorrect username or password. Please try again."
                });
            } else {
                // compare provided password with stored password
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result) {
                        let payload = {username: username};
                        let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
                        res.cookie("jwt", accessToken);

                        // pass to the callback function
                        next();
                    } else {
                        return res.status(401).render("login", {
                            err: "Incorrect username or password. Please try again."
                        });
                    }
                });
            }
        });
    } catch (e) {
        console.error(e);
    }
}

// this function is used to protect certain routes. If user is not logged in they are redirected to login screen. Otherwise, passes to next middleware (usually the controller).
exports.verify = function (req, res, next) {
    const accessToken = req.cookies ? req.cookies.jwt : null; // if req.cookies doesn't exist, setting req.cookies.jwt causes an error.
    if (!accessToken) {
        return res.redirect("login");
    }
    try {
        const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch(err) {
        // If an error occurs, return unauthorized status,
        // clear session cookie and require login again.
        res.clearCookie("jwt").status(401).render("login", {
            err: "Unauthorised action performed. Please log in again."
        });
    }
};
