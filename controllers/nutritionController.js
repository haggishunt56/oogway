exports.demo = (req, res) => {
    // render the nutrition guide view
    res.render("guides/nutrition", {
        // pass the String as a variable named "title"
        "title": "Nutrition guide"
    });
}
