exports.demo = (req, res) => {
    // render the lifestyle guide view
    res.render("guides/lifestyle", {
        // pass the String as a variable named "title"
        "title": "Lifestyle guide",
        "user": res.locals.username
    });
}
