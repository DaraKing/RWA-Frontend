let api = require('../common/api');
let constants = require('../common/constants');

module.exports = {

    // GET all categories
    getAll: function (req, res) {
        let categories = api.call("GET", `${constants.API_URL}/api/categories/all`, null);

        if (!categories) {
            return;
        }

        res.render("categories", { data: categories });
    },
    
    // EDIT categories
    edit: function (req, res) {
        let id = req.params.id;
        let categorie = api.call("GET", `${constants.API_URL}/api/categories/${id}`, null);

        if (!categorie) {
            return;
        }

        res.render("editCategories", { categorie });
    }
}