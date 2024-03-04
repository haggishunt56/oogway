const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController.js");
const controller = require("../controllers/controllers.js");
const bodyController = require("../controllers/bodyController");
const lifestyleController = require("../controllers/lifestyleController");
const nutritionController = require("../controllers/nutritionController");
const mindController = require("../controllers/mindController");
const profileController = require("../controllers/profileController");
const {login} = require('../auth/auth');
const {verify} = require('../auth/auth');
const {getUsername} = require('../auth/user');

// unprotected pages
router.get("/", loginController.landing_page);
router.get("/about", controller.about);

// log in/register
router.get("/register", loginController.register_page);
router.post("/register", loginController.register_new_user);
router.get("/login", loginController.log_in_page);
router.post("/login", login, loginController.log_in_user);
router.get("/logout", verify, loginController.logout);

// home page
router.get("/home", verify, getUsername, controller.home);

// guides
router.get("/guides/populate", verify, getUsername, mindController.populateDB);
router.get("/guides/body", verify, getUsername, bodyController.demo);
router.get("/guides/mind", verify, getUsername, mindController.demo);
router.get("/guides/lifestyle", verify, getUsername, lifestyleController.demo);
router.get("/guides/nutrition", verify, getUsername, nutritionController.demo);

// edit profile
router.get("/profile", verify, getUsername, profileController.editProfile);
// todo
// router.post("/profile", verify, getUsername, profileController.editProfile);

// view progress report
router.get("/progress", verify, getUsername, controller.progress);

// view calendar
router.get("/calendar", verify, getUsername, controller.showCalendar);

// social
router.get("/friends", verify, getUsername, controller.displayFriends);

// page under construction
router.get("/todo", verify, getUsername, controller.underConstruction);
router.get("/friends/todo", verify, getUsername, controller.underConstruction);

// 500 error handler
router.use((req, res, next, err) => {
    console.error("unknown error occurred");
    res.status(500).render("500");
});

// 404 handler
router.use((req, res) => {
    res.status(404).render("404");
});

module.exports = router;
