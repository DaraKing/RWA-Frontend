const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {
    call: function (method = 'GET', url, data) {

        let payload;

        let xhr = new XMLHttpRequest();
        xhr.open(method, url, false);
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
    },
};
