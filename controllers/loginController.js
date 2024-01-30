const userDao = require('../models/user.js');

exports.landing_page = (req, res) => {
    res.render('landing', {
        'title': 'Home'
    });
}

exports.register_page = (req, res) => {
    res.render('register_login/register', {
        'title': 'Register account'
    });
}

exports.register_new_user = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const passwordConf = req.body["password-confirm"];

    // if any field is not supplied, display page again with an error.
    // username and email fields pre-populated. email address must be re-entered.
    if (!username || !email || !password || !passwordConf) {
        res.status(401).render("register_login/register", {
            title: 'Register account',
            err: "Please provide all required fields.",
            username: username,
            email: email
        });
        return;
    }

    // if passwords do not match, display page again with an error
    if (password !== passwordConf) {
        res.status(401).render("register_login/register", {
            title: 'Register account',
            err: "Passwords do not match. Please re-enter.",
            username: username,
            email: email
        });
        return;
    }

    // password validation - minimum 8 characters, at least 1 lowercase letter, 1 uppercase and 1 number
    const passwordRequirements=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/
    console.log(password)
    console.log(passwordRequirements.test(password))
    if (!passwordRequirements.test(password)) {
        res.status(401).render("register_login/register", {
            title: 'Register account',
            err: "Your password must contain at last one lowercase letter, one uppercase letter, and a number, and must be at least 8 characters long.",
            username: username,
            email: email
        });
        return;
    }

    // email address validation - must be a valid email address e.g. addressee@domain.com
    const emailRequirements=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!emailRequirements.test(email)) {
        res.status(401).render("register_login/register", {
            title: 'Register account',
            err: "Enter a valid email address",
            username: username,
            email: email
        });
        return;
    }

    userDao.lookup(username, (err, u) => {
        // if user exists, display error
        if (u) {
            res.status(401).render("register_login/register", {
                title: 'Register account',
                err: "User '" + username + "' already exists. Please <a href=\"/login\">log in</a> instead.",
                username: username,
                email: email
            });
            return;
        }

        // once all validation passed, create user and display confirmation on login page
        userDao.create(username, email, password);
        res.status(200).render("register_login/login", {
            confirmation: "User '" + username + "' created. Please log in using the supplied username and password:"
        });
    });
}

exports.log_in_page = (req, res) => {
    res.render('register_login/login', {
        'title': 'Log in'
    });
}

exports.log_in_user = (req, res) => {
    if (req.cookies) {
        res.render("home", {
            user: req.body.username
        });
    } else {
        // authentication failed
        res.status(401).render("register_login/login", {
            err: "Incorrect username or password. Please try again."
        });
    }
}

exports.logout = (req, res) => {
    res.clearCookie("jwt").status(200).render("landing", {
        title: "Home",
        confirmation: "Successfully logged out."
    });
}
