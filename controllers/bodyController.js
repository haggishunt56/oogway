exports.demo = (req, res) => {
    // render the fitness/body guide view
    res.render("guides/body", {
        // pass the String as a variable named "title"
        "title": "Fitness guide",
        "user": res.locals.username
    });
}
