exports.about = (req, res) => {
    res.render("about", {
        "title": "About us"
    });
}

exports.home = (req, res) => {
    res.render("home", {
        "user": res.locals.username
    });
}

exports.progress = (req, res) => {
    res.render("progress", {
        "title": "Progress report",
        "user": res.locals.username
    })
}
