const http = new EasyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log(response)
//     }
//
// });

const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, response) {
    if(error) {
        console.log(response)
    } else {
        console.log(response)
    }
});