let express = require("express"),
    router = express.Router();

router.get("/register", function (req, res) {
    res.render("logInAndSignUp/register");
});

router.get("/login", function (req, res) {
    res.render("logInAndSignUp/login");
});

module.exports = router;
