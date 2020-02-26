let api = require('../common/api');
let constants = require('../common/constants');

module.exports = {
    new: function (req, res) {
        res.render("images/newImage");
    }
}