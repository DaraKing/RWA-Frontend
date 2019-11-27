export const _QS    = selector => document.querySelector(selector);

export function _setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

export function _getLocalStorage(key) {
    return localStorage.getItem(key);
}

export function _redirect(url) {
    window.location.href = url;
}

export function _apiCall(method = 'GET', url, data, auth = true, cookie=false) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        // auth ? xhr.setRequestHeader('Authorization', API_KEY) : null;
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        if(cookie) {
            xhr.withCredentials = true;
            xhr.crossDomain = true;
        }
        //!!cookie ? xhr.setRequestHeader('Cookie', cookie) : null;
        xhr.onload  = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status    : this.status,
                    statusText: xhr.statusText,
                    error     : this.responseText,
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status    : this.status,
                statusText: xhr.statusText,
            });
        };
        xhr.send(data);
    });
}
