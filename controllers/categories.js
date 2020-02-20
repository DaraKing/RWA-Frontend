let api = require('../common/api');
let constants = require('../common/constants');

module.exports = {

    //Get categories for landing page
    webCategories: function(req, res) {
        let categorie = api.call("GET", `${constants.API_URL}/api/category/web`, null);

        if(!categorie){
            return;
        }

        res.render("photocon", {data: categorie});
    },

    // GET all categories
    getAll: function (req, res) {
        let categories = api.call("GET", `${constants.API_URL}/api/category/all`, null);

        if (!categories) {
            return;
        }

        res.render("categories/allCategories", { data: categories });
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
