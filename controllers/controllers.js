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
    });
}

exports.showCalendar = (req, res) => {
    res.render("calendar", {
        "title": "Calendar",
        "user": res.locals.username
    });
}

exports.displayFriends = (req, res) => {
    res.render("friends", {
        "title": "Friends",
        "user": res.locals.username
    });
}

exports.underConstruction = (req, res) => {
    res.render("todo", {
        "title": "Page under construction",
        "user": res.locals.username
    })
}
