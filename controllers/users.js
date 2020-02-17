let api = require('../common/api');
let constants = require('../common/constants');

module.exports = {
    getAll: function(req, res) {
        let users = api.call('GET' ,`${constants.API_URL}/api/users/all`,null);
        if (!users) {
            return
        }

        res.render("users", {data: users});
    },
    edit: function (req, res) {
        let id = req.params.id;
        let user = api.call('GET', `${constants.API_URL}/api/users/${id}`, null);
        if(!user) {
            return
        }

        let roles = api.call('GET', `${constants.API_URL}/api/roles/all`, null);
        if(!roles) {
            return
        }

        res.render("userEdit", {user, roles});
    }
};
