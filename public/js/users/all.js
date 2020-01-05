import * as u from '../dist/utilis.js';
import * as _c from '../dist/constants.js';

(function () {

    let users;
    u._apiCall('GET', `${_c.API_URL.user}/api/users/all`)
        .then((resp) => {
            users = resp;
        })
        .catch((error) => {
            console.log(error)
        });
}());
