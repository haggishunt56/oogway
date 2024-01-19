const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController.js");
const controller = require("../controllers/controllers.js");
const bodyController = require("../controllers/bodyController");
const lifestyleController = require("../controllers/lifestyleController");
const nutritionController = require("../controllers/nutritionController");
const mindController = require("../controllers/mindController");
const {login} = require('../auth/auth');
const {verify} = require('../auth/auth');

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
router.get("/home", verify, controller.home);

// guides
router.get("/guides/body", verify, bodyController.demo);
router.get("/guides/mind", verify, mindController.demo);
router.get("/guides/lifestyle", verify, lifestyleController.demo);
router.get("/guides/nutrition", verify, nutritionController.demo);

// 500 error handler
router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render("500");
});

// 404 handler
router.use((req, res) => {
    res.status(404).render("404");
});

module.exports = router;
