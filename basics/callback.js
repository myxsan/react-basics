import fetch from "node-fetch"
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

async function getData() {
    const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    console.log(data)
}

getData()