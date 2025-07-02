// exercise 1

// function getUser(userId) {

//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

//     .then(resolve => resolve.json() )

//     .then(date => console.log(date.name) )

//     .catch(err => console.log(err))
// }


// getUser(2);



// exercise 2

function getPost(postId) {
     
     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    .then(resolve => resolve.json() )

    .then(date => console.log(`Post title:  ${date.title}`) )

    .catch(err => console.log(err))

}

getPost(3);