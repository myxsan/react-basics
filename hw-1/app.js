import axios from "axios";

const getData = async (id) => {
    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

    const data = user + posts
    return data
}

const getData2 = async (id) => {
    return new Promise(async (resolve, rejecet) => {
        const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + id)
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id);
        var data = `user: ${user}
        posts: ${posts}`
        if (data === null && data === undefined) {
            rejecet("A problem occured")
        }
        resolve({user, posts})
    })
}
export default getData2;