import React from 'react'

const Comments = async ({promise}) => {

    const comments = await promise;

  return (
    <div>
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h3>Name: {comment.name}</h3>
                    <p>Comment: {comment.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Comments