let express = require("express"),
    router = express.Router(),
    images = require('../controllers/images')

// New image
router.get("/category-photo/upload", images.new);

module.exports = router;