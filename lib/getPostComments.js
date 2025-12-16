
export default async function getAllPostComments(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    if(!result.ok) {
        throw new Error('Something went wrong fetching posts')
    }

    return result.json()
}