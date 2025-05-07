const nedb = require("nedb");
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
const path = require('path');

class UserDAO {
    constructor() {
        try {
            this.db = new nedb({filename: path.join(__dirname, 'users.db'), autoload:true});
        } catch(err) {
            console.log("Error creating users database")
        }
    }

    create(username, email, dateOfBirth, password) {
        const userDAO = this;
        bcrypt.hash(password, SALT_ROUNDS).then(function(hash) {
            var entry = {
                user: username,
                email: email,
                dob: dateOfBirth,
                password: hash,
            };
            userDAO.db.insert(entry, function (err) {
                if (err) {
                    console.log("Can't insert user: ", username);
                }
            });
        });
    }

    lookup(user, cb) {
        this.db.find({'user': user}, function (err, entries) {
            if (err) {
                return cb(null, null);
            } else {
                if (entries.length == 0) {
                    return cb(null, null);
                }
                return cb(null, entries[0]);
            }
        });
    }

    update(user, email, dob, cb) {
        // find user in db, update the email and dob fields to the supplied address
        this.db.update({'user': user}, {'email': email, 'dob': dob}, err => {
            if (err) {
                console.log("Unable to update user: ", username);
                return cb(false); // pass false to callback function to show update failed
            }
        });
        return;
    }
}

const dao = new UserDAO();
module.exports = dao;
