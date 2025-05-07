const userDao = require("../models/user");
exports.editProfilePage = (req, res) => {

    console.log(res.locals.username);

    userDao.lookup(res.locals.username, (err, u) => {
        // if user exists, render update profile page with user details passed as variables
        if (u) {
            res.render("profile", {
                "title": "Update profile",
                "user": res.locals.username,
                "u": u
            });
        }
        if (err) {
            res.status(500).render("500");
        }
    });
}

exports.editProfile = (req, res) => {
    const username = res.locals.username;
    const email = req.body.email;
    const dob = req.body.dob;
    console.log("editing profile");

    // field validation; mandatory fields
    if (!email || email==="" || !dob || dob==="") {
        res.status(401).render("register_login/register", {
            title: 'Register account',
            err: "Please provide all required fields.",
            username: username,
            dob: dob,
            email: email
        });
        return;
    }

    console.log("mandatory fields accepted");

    // email address validation; must be a valid email address e.g. addressee@domain.com
    const emailRequirements=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!emailRequirements.test(email)) {
        res.status(401).render("register_login/register", {
            title: 'Register account',
            err: "Enter a valid email address",
            username: username,
            dob: dob,
            email: email
        });
        return;
    }

    console.log("email address accepted. updating userDao");

    userDao.update(username, email, dob, err => {
        if (err) {
            res.status(500).render("500", {
                "err": err
            });
        } else {
            res.render("success");
        }
    });
}
