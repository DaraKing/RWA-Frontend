let user = JSON.parse(window.localStorage.getItem('user'));

if(user) {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "none";
    document.querySelector(".current-user > a").text = user.first_name + " " + user.last_name;
}else {
    document.querySelector(".current-user").style.display = "none";
}

document.getElementById("logout").addEventListener("click", function () {
    window.localStorage.removeItem('user');
    window.reload();
});
