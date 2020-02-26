let express = require("express"),
    router = express.Router(),
    images = require('../controllers/image')

// New image
router.get("/category-photo/upload", images.new);

module.exports = router;
