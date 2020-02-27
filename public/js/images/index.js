let user = JSON.parse(window.localStorage.getItem('user'));

if (!user) {
    window.location.href = "/photocon";
}

let submitBtn = document.getElementById("submit-image");

if(submitBtn) {
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let form = document.querySelector("form");
        console.log(form);

        let formData = new FormData(form);
        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:4000/api/category-photo/upload");
        request.setRequestHeader("Authorization", `Bearer ${user.user_token}`);
        request.send(formData);
    });
}
