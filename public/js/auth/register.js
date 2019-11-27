import * as u from '../dist/utilis.js';
import * as _c from '../dist/constants.js';

let registerUser = async function(e) {
    e.preventDefault();

    let data = {
        "first_name": u._QS('#first-name').value,
        "last_name": u._QS('#last-name').value,
        "email": u._QS('#email').value,
        "age": u._QS('#age').value,
        "country": u._QS('#country').value,
        "city": u._QS('#city').value,
        "password": u._QS('#password').value,
        "password_repeat": u._QS('#password-repeat').value
    };

    await u._apiCall('POST', `${_c.API_URL.user}/api/auth/register`, JSON.stringify(data), false);

    u._redirect("/");
};

u._QS('#register-btn').addEventListener('click', registerUser);
