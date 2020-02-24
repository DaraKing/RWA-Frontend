let api = function (method = 'GET', url, data) {

    let payload;

    let xhr = new XMLHttpRequest();
    xhr.open(method, url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcmlvLmtuZXpvdmljaEBnbWFpbC5jb20iLCJ1c2VyX2lkIjoxLCJyb2xlX2lkIjozLCJpYXQiOjE1NzkyOTcxMzV9.1SDu5PBgRP-kvVZzGuZQstKIJA6v4pR0Ev7iI4jTtak');
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
}

var deleteBtns = document.querySelectorAll('.delete-category');
var createBtn = document.getElementById('create-category');
var editBtn = document.getElementById('edit-category');

if(deleteBtns) {
    var deleteCategory = function (element) {
        var id = element.target.id;

        let response = api('DELETE', `http://localhost:4000/api/category/${id}`);

        if(!response) {
            return
        }

        window.location.reload();
    };

    for (var i=0; i<deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", deleteCategory);
    }
}

if(createBtn) {
    createBtn.addEventListener("click", function (e) {
        let category_name = document.getElementById('category_name').value,
            category_description = document.getElementById('category_description').value,
            category_image = document.getElementById('category_image').value;

        let payload = {
            category_name,
            category_description,
            category_image
        };

        let response = api('POST', 'http://localhost:4000/api/category/create', JSON.stringify(payload));
        if (!response) {
            return
        }

        window.location.href = "/admin/categories/all";
    });
}

if(editBtn) {
    editBtn.addEventListener("click", function (e) {
        let category_name = document.getElementById('category_name').value,
            category_description = document.getElementById('category_description').value,
            category_image = document.getElementById('category_image').value,
            category_id = document.getElementById('category_id').value;

        let payload = {
            category_name,
            category_description,
            category_image
        }

        let response = api('PUT', `http://localhost:4000/api/category/${category_id}`, JSON.stringify(payload));
        if (!response) {
            return
        }

        window.location.href = "/admin/categories/all";
    })
}
