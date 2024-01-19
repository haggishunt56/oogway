const jwt_decode = require("jwt-decode");

exports.about = (req, res) => {
    res.render("about", {
        "title": "About us"
    });
}

exports.home = (req, res) => {
    const token = req.cookies.jwt;
    const decoded_token = jwt_decode(
        token.slice(
            0,
            token.indexOf(
                ".",
                token.indexOf(
                    ".",
                    0
                )+1
            )
        )
    ); // jwt_decode is unable to decode the last section of the token. It is removed by the slice() method to allow the remainder to be decoded.
    const user = decoded_token.username;
    res.render("home", {
        user: user
    });
}
