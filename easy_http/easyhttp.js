function EasyHTTP() {
    this.http = new XMLHttpRequest;
}

// Make an HTTP GET Request
EasyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    let self = this;

    this.http.onload = () => {
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error:' + self.http.status);
        }
    };

    this.http.send();
};
// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request