const http2 = new easyHttp2();
// http2.get('https://jsonplaceholder.typicode.com/posts')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

//Create User
http2.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Update Post
// http2.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
http2.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));