let express = require("express"),
    router = express.Router(),
    categories = require('../controllers/categories')

// Index route redirect
router.get("/", (req, res) => {
    res.redirect("photocon");
});

// Index route
router.get("/photocon", categories.webCategories);


module.exports = router;