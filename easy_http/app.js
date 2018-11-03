const http = new EasyHTTP;

// const users = http.get('https://jsonplaceholder.typicode.com/users');
//
// users.then(data => console.log(data))
//     .catch(err => console.log(err));

// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@example.com'
};

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .then(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/1', data)
//     .then(data => console.log(data))
//     .then(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .then(err => console.log(err));