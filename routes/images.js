let express = require("express"),
    router = express.Router(),
    images = require('../controllers/image')

// New image
router.get("/category-photo/upload/:categoryId", images.new);

module.exports = router;
