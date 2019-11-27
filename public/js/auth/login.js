import * as u from '../dist/utilis.js';
import * as _c from '../dist/constants.js';

let loginUser = async function(e) {
    e.preventDefault();

    let data = {
        "email": u._QS('#email').value,
        "password": u._QS('#password').value
    };

    const r = await u._apiCall('POST', `${_c.API_URL.user}/api/auth/login`, JSON.stringify(data), false);

    u._setLocalStorage('user', r);
    u._redirect("/");
};

u._QS('#login-btn').addEventListener('click', loginUser);
