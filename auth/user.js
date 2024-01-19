exports.getUsername = function (req, res, next) {
    const jwt_decode = require("jwt-decode");
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

    res.locals.username = decoded_token.username;
    next();
}
