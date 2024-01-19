exports.editProfile = (req, res) => {
    // render the nutrition guide view
    res.render("profile", {
        // pass the String as a variable named "title"
        "title": "Update profile",
        "user": res.locals.username
    });
}
