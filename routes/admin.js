let express = require("express"),
    router = express.Router(),
    categories = require('../controllers/categories')

// Get all categories
router.get("/admin/categories/all", categories.getAll);

// Create new category
router.get("/admin/categories/create", categories.create);

module.exports = router;