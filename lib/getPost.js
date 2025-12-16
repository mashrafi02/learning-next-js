
export default async function getAllPost(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if(!result.ok) {
        throw new Error('Something went wrong fetching posts')
    }

    return result.json()
}