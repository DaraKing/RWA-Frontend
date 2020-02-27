let user = JSON.parse(window.localStorage.getItem('user'));
let uploadBtn = document.getElementById('upload-photo');

if(user) {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "none";
    document.querySelector(".current-user > a").text = user.first_name + " " + user.last_name;
}else {
    document.querySelector(".current-user").style.display = "none";
    if(uploadBtn) {
        uploadBtn.style.display = "none";
    }
}

if(user.role_id != 1) {
    let dropdownMenu = document.querySelector('.dropdown-menu');
    let a = document.createElement("a");
    a.classList.add("dropdown-item");
    a.href = "/admin/categories/all";
    a.text = "Admin panel";

    dropdownMenu.prepend(a);
}

document.getElementById("logout").addEventListener("click", function () {
    window.localStorage.removeItem('user');
    window.location.reload();
});
