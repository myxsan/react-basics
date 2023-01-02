import fetch from "node-fetch"
import axios from "axios"
// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// setInterval(() => {
//     console.log("It will log this each 3 secs");
// }, 3000);

// const sayHello = (callback) => {
//     callback()
// }

// sayHello( () => console.log("Hello"))

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then(users => {
//     console.log(users)

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(data => data.json())
//     .then((post) => {
//         console.log("post 1 uploaded", post)

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((data) => data.json())
//         .then((post) => {
//             console.log("Post 2 uploaded" ,post)
//         })
//     })
// })

// (async () => {
//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")
//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1")
//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/1")
//     console.log("users: ", users)
//     console.log("post1: ", post1);
//     console.log("post2: " ,post2);
// })()

const getUsers = (num) => {
    return new Promise(async (resolve, rejecet) => {
        if (num === 1) {
            const { data } = await axios("https://jsonplaceholder.typicode.com/users")
            resolve(data)
        }
        rejecet("A problem occured")
    })
}

const getPost = (post_id) => {
    return new Promise(async (resolve, rejecet) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + post_id)
        if (data === null && data === undefined) {
            rejecet("A problem occured")
        }
        resolve(data)
    })
}

// (async () => {
//     try {
//         const users = await getUsers(1)
//         const post = await getPost(101)

//         console.log(users)
//         console.log(post)
//     } catch (error) {
//         console.log(error)
//     }
// }
// )()

Promise.all([getUsers(1), getPost(1)]).then(console.log).catch(console.log)