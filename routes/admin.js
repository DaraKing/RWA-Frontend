let express = require("express"),
    router = express.Router(),
    categories = require('../controllers/categories'),
    users = require('../controllers/users');

// Get all categories
router.get("/admin/categories/all", categories.getAll);

// Create new category
router.get("/admin/categories/create", categories.create);

router.get("/admin/categories/edit/:id", categories.edit);

// Get all users
router.get("/admin/users", users.getAll);

// Edit user
router.get("/admin/users/edit/:id", users.edit);

module.exports = router;
