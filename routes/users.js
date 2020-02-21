let express = require("express"),
    router = express.Router(),
    users = require('../controllers/users')

// Get all users
router.get("/users", users.getAll);

// Edit user
router.get("/users/edit/:id", users.edit);

module.exports = router;