// EXERCISE 1

// function getUser(userId) {

//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

//     .then(resolve => resolve.json() )

//     .then(date => console.log(date.name) )

//     .catch(err => console.log(err))
// }


// getUser(1);



// EXERCISE 2

// function getPost(postId) {
     
//      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

//     .then(resolve => resolve.json() )

//     .then(date => console.log(`Post title:  ${date.title}`) )

//     .catch(err => console.log(err))

// }

// getPost(2);



// EXERCISE 3

// function  getUserEmail(userId) {
    
//      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

//     .then(resolve => resolve.json())

//     .then(date => console.log(`User's email: ${date.email}`) )

//     .catch(err => console.log(err))

// }

// getUserEmail(3)


// EXERCISE 4

// function listUserTodos(userId) {

//     fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)

//     .then(resolve => resolve.json())

//     .then(date => console.log(`User ${userId}: has ${date.length} todos`) )

//     .catch(err => console.log(err))

// }

// listUserTodos(4) 

// EXERCISE 5

// function checkPostExists(postId) {

//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

//     .then(resolve => resolve.json() )

//     .then(date => { 
    
//         if(date.userId) {console.log(`Post exists`);}

//         else {console.log(`Post not found`);}
        
//     })

//     .catch(err => console.log((err)))
    


// }

// checkPostExists(1);
// checkPostExists(12345679);

// EXERCISE 6