const guideDAO = require('../models/guides.js');

exports.demo = (req, res) => {
    // render the mind(fulness) guide view

    guideDAO.getGuidesByType("mind", (err, guides) => {
        console.log(guides)
        if (err) {
            res.status(500).render("500");
        } else {
            res.render("guides/mindfulness", {
                "title": "Mindfulness guide",
                "user": res.locals.username,
                "guides": guides
            });
        }
    });

    // res.render("guides/mindfulness", {
    //     // pass the String as a variable named "title"
    //     "title": "Mindfulness guide",
    //     "user": res.locals.username
    // });
}
