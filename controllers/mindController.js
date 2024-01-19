exports.demo = (req, res) => {
    // render the mind(fulness) guide view
    res.render("guides/mindfulness", {
        // pass the String as a variable named "title"
        "title": "Mindfulness guide"
    });
}
