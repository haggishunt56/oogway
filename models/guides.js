const nedb = require("nedb");
const path = require('path');

class GuidesDAO {
    constructor() {
        try {
            this.db = new nedb({filename: path.join(__dirname, 'guides.db'), autoload:true});
        } catch(err) {
            console.log(err)
        }
    }

    create(title, author, type, body) {
        const guideDAO = this;
        var entry = {
            title: title,
            date: new Date(Date.now()),
            author: author,
            type: type,
            body: body
        }
        guideDAO.db.insert(entry, function (err) {
            if (err) {
                console.log("Error: Cannot create guide: ", title);
                console.log(err);
            }
        });
    };

    getGuidesByType(type, cb) {
        this.db.find({'type': type}, function (err, entries) {
            if (err) {
                return cb(null, null);
            } else {
                if (entries.length == 0) {
                    return cb(null, null);
                }
                return cb(null, entries);
            }
        });
    }
}

const dao = new GuidesDAO();
module.exports = dao;
