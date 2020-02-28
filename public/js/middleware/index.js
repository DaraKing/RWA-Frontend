let user = JSON.parse(window.localStorage.getItem('user'));

if(!user) {
    window.history.back();
}

if(user.role_id === 1) {
    window.history.back();
}
