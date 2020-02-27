let user = JSON.parse(window.localStorage.getItem('user'));
let likeBtns = document.querySelectorAll('.like-image');
let dislikeBtns = document.querySelectorAll('.dislike-image');

if (!user) {
    for(let i=0; i<likeBtns.length; i++) {
        likeBtns[i].style.display = "none";
    }

    for(let i=0; i<dislikeBtns.length; i++) {
        dislikeBtns[i].style.display = "none";
    }
}
let api = function (method = 'GET', url, data) {

    let payload;

    let xhr = new XMLHttpRequest();
    xhr.open(method, url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${user.user_token}`);
    xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            payload = JSON.parse(xhr.responseText);
        } else {
            console.warn({
                status: this.status,
                statusText: xhr.statusText,
                error: this.responseText,
            });
        }
    };
    xhr.onerror = function () {
        console.error({
            status: this.status,
            statusText: xhr.statusText,
        });
    };
    xhr.send(data);

    return payload;
};

let likeImage = function (element) {

    let imageId = element.target.id;
    let response = api('POST', `http://localhost:4000/api/category-photo/like/${imageId}`);

    if(!response) {
        return
    }

    window.location.reload();
};

let dislikeImage = function (element) {

    let imageId = element.target.id;
    let response = api('POST', `http://localhost:4000/api/category-photo/dislike/${imageId}`);

    if(!response) {
        return
    }

    window.location.reload();
};

if(likeBtns) {
    for(let i=0; i<likeBtns.length; i++) {
        likeBtns[i].addEventListener("click", likeImage);
    }
}

if(dislikeBtns) {
    for(let i=0; i<dislikeBtns.length; i++) {
        dislikeBtns[i].addEventListener("click", dislikeImage);
    }
}
